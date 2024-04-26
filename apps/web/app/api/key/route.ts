import {NextRequest, NextResponse} from "next/server";
import argon2 from "argon2";
import uuid from "uuid";

import {validateRequest} from "@/lib/lucia-auth/auth";
import {storeKey} from "@/services/key.service";

export async function POST(req: NextRequest) {
  const {session, user} = await validateRequest();
  if (!session || !user)
    return NextResponse.json({error: "Missing session"}, {status: 401});
  try {
    //   Generate key and hash key
    const key = uuid.v5("name", process.env.ID_NAMESPACE!);
    const hashed = await argon2.hash(key);
    // Store key in database
    const storedValue = await storeKey("name", hashed, user.id);
    if (storedValue?.error)
      return NextResponse.json(
        {error: storedValue.error?.message ?? storedValue.error},
        {status: 500},
      );

    // Return key for preview
    return NextResponse.json({data: {key}}, {status: 201});
  } catch (error) {
    return NextResponse.json({error: "Error DON HAPPEN"}, {status: 500});
  }
}
