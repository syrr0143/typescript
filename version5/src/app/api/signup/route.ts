import User, { UserType } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDb } from "@/lib/dbConfig";
connectDb();
export async function POST(request: NextRequest) {
    const { email, username, password }: any = await request.json();
    try {
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({
                success: false,
                message: "user with same email already exist"
            }, {
                status: 403
            })
        }
        const newuser = new User({
            username: username,
            email: email,
            password: password
        })
        const saveduser = await newuser.save();
        console.log(newuser)
        return NextResponse.json({
            success: true,
            user: saveduser,
            message: "User registered successfully"
        }, {
            status: 201
        })
    } catch (error) {
        console.log('error while creating user', error)
        return NextResponse.json({
            success: false,
            message: "something went wrong while creating user "
        }, {
            status: 500
        })
    }
}