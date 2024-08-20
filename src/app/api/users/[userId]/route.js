import { usersData } from "@/app/util/db";
import { NextResponse } from "next/server";

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
