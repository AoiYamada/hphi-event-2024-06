import { NextRequest, NextResponse, userAgent } from "next/server";

export async function GET(req: NextRequest) {
  console.debug(`GET ${req.nextUrl.pathname}`);

  console.log(JSON.stringify(userAgent(req), null, 2));

  return NextResponse.json("OK");
}
