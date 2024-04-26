import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
  //   try {
  //   } catch (error) {}
  console.log(req.headers.get("X-Forwarded-HOST"));
  return NextResponse.json({req: "hitting"}, {status: 200});
}
