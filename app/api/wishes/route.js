import Wish from "@/models/wishes";
import connectDB from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description } = await req.json();
  await connectDB();
  await Wish.create({ title, description });
  return NextResponse.json({ message: "posted" }, { status: 201 });
}

export async function GET(req) {
  await connectDB();
  const res = await Wish.find();
  return NextResponse.json(res, { status: 200 });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  console.log(id);
  await connectDB();
  await Wish.findByIdAndDelete(id);
  return NextResponse.json({ status: 204 }, { message: "Deleted" });
}

