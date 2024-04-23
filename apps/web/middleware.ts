import {type NextRequest, NextResponse} from "next/server";
import {verifyRequestOrigin} from "lucia";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  if (request.method == "Get") return NextResponse.next();
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|sitemap.xml|robots.txt).*)"],
};