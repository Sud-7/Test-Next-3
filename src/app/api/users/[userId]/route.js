import { usersData } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  console.log(content.params.userId);

  const userDetails = usersData.filter(
    (item) => item.id == content.params.userId
  );
  console.log(userDetails);
  return NextResponse.json(
    userDetails.length == 0
      ? { result: "No result found", success: false }
      : { result: userDetails, success: true }
  );
}
