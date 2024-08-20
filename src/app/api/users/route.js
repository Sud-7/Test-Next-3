import { usersData } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json(usersData);
}

export async function POST(request) {
  let payload = await request.json();
  console.log(payload);
  if (!payload.name || !payload.age || !payload.city) {
    return NextResponse.json({ result: "Invalid Fields" }, { status: 400 });
  }
  return NextResponse.json(
    { result: "ID created successfully" },
    { status: 201 }
  );
}
