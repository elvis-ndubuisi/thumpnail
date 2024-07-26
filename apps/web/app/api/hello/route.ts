import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
  try {
    const res = await request.formData();
    let dd = res.get("ddd");
    return Response.json({dd});
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {error: "Invalid JSON data in request body"},
        {status: 400},
      );
    }
    return Response.json({error: error}, {status: 500});
  }
}
