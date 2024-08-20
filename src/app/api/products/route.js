import { Product } from "@/app/util/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(process.env.MONGO_URL);
    data = await Product.find();
  } catch (error) {
    data = { success: false };
  }
  return NextResponse.json({ result: data });
}
