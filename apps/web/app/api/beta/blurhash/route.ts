/**
 * Generates a blurhash code from an image url or image file
 */
import {NextRequest} from "next/server";
import Jimp from "jimp";

import {encode} from "@thumpnail/blurhash";

import {validateApiRequest} from "@/lib/validate-api-request";

export const config = {
  runtime: "edge",
};

export async function POST(request: NextRequest) {
  try {
    const {limit, remaining, reset} = await validateApiRequest(request);
    const formData = await request.formData();
    const image = formData.get("image") as any;
    // TODO: check against none image file type
    if (!image) {
      return Response.json({message: "Image (image) is required"}, {status: 400});
    }

    // Parse image
    const buff = await image.arrayBuffer();
    const data = await Jimp.read(buff);

    const hash = encode(
      data.bitmap.data as any,
      data.bitmap.width,
      data.bitmap.height,
      4,
      4,
    );

    return Response.json(
      {hash: hash},
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      },
    );
  } catch (error: any) {
    console.log(error);
    return Response.json(
      {error: error?.error ?? "Error generating blurhash"},
      {status: 500},
    );
  }
}

// U6H^U--s554m6,^#wI0N0h%H0gMK==kX}=0#
