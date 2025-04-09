import { User } from "@/models/user.model";
import { connectDB } from "@/utils/db/connect";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  // console.log(await req.json());
  const { name, year, department, email, password, phoneNumber } =
    await req.json();
    await connectDB()
  const user = await User.create({
    name,
    year,
    department,
    credentials: {
      email,
      password,
      phoneNumber,
    },
  });
  if (user) {
    return NextResponse.json({
      success: true,
      message: "User created successfully",
      user,
    });
  } else {
    return NextResponse.json({
        message : "User creation failed",
    })
  }
}
