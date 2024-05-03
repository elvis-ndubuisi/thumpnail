import type {NextRequest} from "next/server";

import {db} from "./db";
import {rateLimit} from "./rate-limit";

export async function validateApiRequest(request: NextRequest) {
  // Find api key in header.
  const apiKey = request.headers.get("x-thumpnail");
  if (!apiKey) throw {error: "Invalid/Missing API key"};

  // validate api key
  const k = await db.project.findFirst({where: {key: apiKey}});
  if (!k) throw {error: "Invalid/Missing API key"};

  //   const ip = request.ip ?? "127.0.0.1";
  const {limit, remaining, reset, success} = await rateLimit.limit(apiKey);

  if (!success) throw {error: "Limit (5) exceeded"};

  return {limit, remaining, reset};
}
