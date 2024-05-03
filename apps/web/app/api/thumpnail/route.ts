import {NextRequest} from "next/server";

// import {validateApiRequest} from "@/lib/validate-api-request";

export async function POST(request: NextRequest) {
  try {
    console.log(request.headers.get("ooka"));
    // const {limit, remaining, reset} = await validateApiRequest(request);
    return Response.json({success: true}, {status: 200});
  } catch (error) {
    return Response.json({error: error}, {status: 500});
  }
}
