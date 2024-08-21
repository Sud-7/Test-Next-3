import { Product } from "@/app/util/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(process.env.MONGO_URL);
    data = await Product.find();
  } catch (error) {
    data = { result: "error" };
  }
  return NextResponse.json({ data });
}

export async function POST(request) {
  let payload = await request.json();
  await mongoose.connect(process.env.MONGO_URL);
  let product = new Product(payload);
  const result = await product.save();
  const actual = result.data;
  return NextResponse.json({ actual, success: true });
}
