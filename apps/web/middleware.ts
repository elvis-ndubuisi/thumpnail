import {NextResponse, type NextRequest} from "next/server";
import {verifyRequestOrigin} from "lucia";

export {auth as middleware} from "./lib/auth";

// export async function middleware(request: NextRequest): Promise<NextResponse> {
//   if (request.method == "Get") return NextResponse.next();
//   return NextResponse.next();
// }

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|sitemap.xml|robots.txt).*)"],
};
