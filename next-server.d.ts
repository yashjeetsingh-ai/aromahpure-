// Minimal type declarations to satisfy TypeScript for `next/server` imports
// This is only used by the editor/linter; Next.js provides its own runtime types.

declare module "next/server" {
  export interface NextRequest extends Request {}

  export class NextResponse extends Response {
    static json<Data = unknown>(
      body: Data,
      init?: ResponseInit
    ): NextResponse;
  }
}



