import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18n = createMiddleware(routing);

/** Metadata routes that must not be locale-prefixed. */
const ROOT_ASSET =
  /^\/(es|en)\/(icon|apple-icon|opengraph-image|twitter-image)(.*)$/;

export default function proxy(request) {
  const { pathname } = request.nextUrl;

  const assetMatch = pathname.match(ROOT_ASSET);
  if (assetMatch) {
    const url = request.nextUrl.clone();
    url.pathname = `/${assetMatch[2]}${assetMatch[3] || ""}`;
    return NextResponse.rewrite(url);
  }

  if (
    pathname === "/icon" ||
    pathname.startsWith("/icon/") ||
    pathname.startsWith("/opengraph-image") ||
    pathname.startsWith("/apple-icon")
  ) {
    return NextResponse.next();
  }

  return handleI18n(request);
}

export const config = {
  matcher: ["/", "/(es|en)/:path*", "/((?!_next|_vercel|.*[.].*).*)"],
};
