import {NextRequest} from "next/server";

import {validateApiRequest} from "@/lib/validate-api-request";

export async function GET(request: NextRequest) {
  try {
    const {limit, remaining, reset} = await validateApiRequest(request);

    return Response.json(
      {success: true},
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      },
    );
  } catch (error) {
    return Response.json({error: "error"}, {status: 500});
  }
}
