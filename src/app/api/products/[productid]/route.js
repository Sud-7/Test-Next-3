import { Product } from "@/app/util/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const productId = content.params.productid;
  const filter = { _id: productId };
  const payload = await request.json();
  await mongoose.connect(process.env.MONGO_URL);
  const result = await Product.findOneAndUpdate(filter, payload);
  return NextResponse.json({ result });
}
export async function GET(request, content) {
  const productId = content.params.productid;
  const filter = { _id: productId };
  //   console.log(filter);

  await mongoose.connect(process.env.MONGO_URL);
  const result = await Product.findById(filter);
  return NextResponse.json({ result });
}
export async function DELETE(request, content) {
  const productId = content.params.productid;
  const filter = { _id: productId };
  // console.log(filter);

  await mongoose.connect(process.env.MONGO_URL);
  const result = await Product.deleteOne(filter);
  return NextResponse.json({ result });
}
