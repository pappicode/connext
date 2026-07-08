import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    success: true,
    query: body.query,
    results: [
      {
        name: "Andrew Ng",
        title: "Professor",
        organization: "Stanford",
      },
    ],
  });
}
