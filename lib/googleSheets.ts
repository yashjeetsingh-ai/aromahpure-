import { google } from "googleapis"
import { readFile } from "node:fs/promises"

type ContactRow = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
  source?: string
}

export type SubmissionRow = {
  source: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  meta?: Record<string, unknown>
}

function decodeBase64ToUtf8(base64: string) {
  return Buffer.from(base64, "base64").toString("utf8")
}

async function getServiceAccount() {
  const jsonFilePath =
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON_FILE || process.env.GOOGLE_SERVICE_ACCOUNT_FILE
  const rawBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64
  const rawJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  const rawFromEnv = rawBase64 ? decodeBase64ToUtf8(rawBase64) : rawJson
  const rawFromFile = !rawFromEnv && jsonFilePath ? await readFile(jsonFilePath, "utf8") : null
  const raw = rawFromEnv ?? rawFromFile
  if (!raw) return null

  // Accept common env-var formats:
  // - raw JSON
  // - JSON wrapped in single/double quotes
  const trimmed = raw.trim()
  const unwrapped =
    (trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))
      ? trimmed.slice(1, -1)
      : trimmed

  const parsed = JSON.parse(unwrapped) as {
    client_email: string
    private_key: string
  }

  return {
    ...parsed,
    // Service account JSON often encodes newlines in private_key as "\\n"
    private_key: parsed.private_key?.replace(/\\n/g, "\n"),
  }
}

export async function appendSubmissionToSheet(row: SubmissionRow) {
  const spreadsheetId = process.env.GSHEET_ID
  const sheetName = process.env.GSHEET_TAB || "Sheet1"
  const sa = await getServiceAccount()

  if (!spreadsheetId || !sa?.client_email || !sa?.private_key) {
    return { skipped: true as const }
  }

  const auth = new google.auth.JWT({
    email: sa.client_email,
    key: sa.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  const sheets = google.sheets({ version: "v4", auth })
  const nowIso = new Date().toISOString()

  const metaString = row.meta ? JSON.stringify(row.meta) : ""

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:Z`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          nowIso,
          row.source,
          row.firstName || "",
          row.lastName || "",
          row.email || "",
          row.phone || "",
          row.message || "",
          metaString,
        ],
      ],
    },
  })

  return { skipped: false as const }
}

export async function appendContactToSheet(row: ContactRow) {
  return appendSubmissionToSheet({
    source: row.source || "contact",
    firstName: row.firstName,
    lastName: row.lastName,
    email: row.email,
    phone: row.phone,
    message: row.message,
  })
}

