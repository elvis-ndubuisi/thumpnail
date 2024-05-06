/**
 * Generates a blurhash code from an image url or image file
 */
import {NextRequest} from "next/server";

// import {encode} from "@thumpnail/blurhash";

import {validateApiRequest} from "@/lib/validate-api-request";

export async function POST(request: NextRequest) {
  try {
    const {limit, remaining, reset} = await validateApiRequest(request);
    // TODO: check against none image file type
    return Response.json(
      {okayna: true},
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
    return Response.json({error: error}, {status: 500});
  }
}
