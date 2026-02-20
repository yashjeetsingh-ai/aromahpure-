import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import metadata from "@/data/metadata.json"

// Har ek metadata object ka type define karo
type PageMetadata = {
  title: string
  description: string
  type: string
  url: string
  images: string[]
  keywords?: string[] // ✅ optional banaya
}

// Metadata keys
type MetadataKey = keyof typeof metadata

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getPageMetadata(pageKey: MetadataKey): Promise<PageMetadata | null> {
  return metadata[pageKey] || null
}
