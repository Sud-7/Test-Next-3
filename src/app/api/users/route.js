import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json({ name: "Sud", age: 27, city: "Noida" });
}
