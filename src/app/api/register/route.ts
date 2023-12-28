import { User } from "@/models/User";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import connect from "@/utils/db";
export async function POST(req: any) {
  try {
    const { email, password } = await req.json();
    await connect();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    if (!password?.length || password.length < 6) {
      return NextResponse.json(
        { message: "password must be at least 6 characters" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email is already in use" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      email,
      password: hashedPassword,
    }).save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (err: any) {
    return new NextResponse(err, { status: 500 });
  }
}
