import { usersData } from "@/app/util/db";
import { NextResponse } from "next/server";
import nextConfig from "../../../../../next.config.mjs";

export function GET(request, response) {
  console.log(response.params.userId);

  const userDetails = usersData.filter(
    (item) => item.id == response.params.userId
  );
  console.log(userDetails);
  return NextResponse.json(
    userDetails.length == 0
      ? { result: "No result found", success: false }
      : { result: userDetails[0], success: true }
  );
}

export async function PUT(request, content) {
  let payload = await request.json();
  payload.id = content.params.userId;
  console.log(payload);
  if (!payload.id || !payload.name || !payload.age || !payload.city) {
    return NextResponse.json({ result: "Some fields are missing" });
  }
  return NextResponse.json({
    result: "User updated successfully ",
  });
}
