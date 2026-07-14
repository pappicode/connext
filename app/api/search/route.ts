import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    query: body.query,
    results: [
      {
        id: 1,
        name: "Andrew Ng",
        title: "Professor",
        organization: "Stanford",
        match: 98,
      },
      {
        id: 2,
        name: "Yann LeCun",
        title: "Chief AI Scientist",
        organization: "Meta",
        match: 95,
      },
      {
        id: 3,
        name: "Fei-Fei Li",
        title: "Professor",
        organization: "Stanford",
        match: 94,
      },
    ],
  });
}