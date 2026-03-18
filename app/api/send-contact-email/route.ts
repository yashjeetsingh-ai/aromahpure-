// app/api/send/route.ts
import { type NextRequest, NextResponse } from "next/server";
import { appendContactToSheet } from "@/lib/googleSheets";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All required fields must be provided" },
        { status: 400 }
      );
    }

    const sheetResult = await appendContactToSheet({
      firstName,
      lastName,
      email,
      phone,
      message,
      source: "contact/inquire",
    });

    if (sheetResult.skipped) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Google Sheets is not configured. Please set GSHEET_ID, GSHEET_TAB (optional), and GOOGLE_SERVICE_ACCOUNT_JSON.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Saved to Google Sheet successfully",
    });
  } catch (error) {
    console.error("❌ Error saving inquiry to Google Sheet:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save data" },
      { status: 500 }
    );
  }
}
