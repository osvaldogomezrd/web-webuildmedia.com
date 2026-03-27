import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function resolveHtmlLang(request: NextRequest): "es" | "en" {
  const pathname = request.nextUrl.pathname.toLowerCase();
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "en";
  }
  return "es";
}

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-html-lang", resolveHtmlLang(request));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
