import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
import { connectDb } from "@/lib/dbConfig";

connectDb();
export async function POST(request: NextRequest) {
    const reqbody = await request.json();
    const { email, password } = reqbody;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "user does not exists"
            }, {
                status: 404
            })
        }
        const ispasswordok = await user.password === password;
        if (!ispasswordok) {
            return NextResponse.json({
                success: false,
                message: "invalid credentials"
            }, {
                status: 401
            })
        }
        const token = await jwt.sign({
            _id: user._id
        }, process.env.TOKEN_SECRET as string, { expiresIn: '24h' });

        const response = NextResponse.json({
            success: true,
            message: "login successful",
            user: user,
            token: token
        }, {
            status: 200
        })

        response.cookies.set("token", token);
        return response;

    } catch (error) {
        console.log('error while login', error)
        return NextResponse.json({
            success: false,
            message: (error as Error).message
        }, {
            status: 500
        })
    }
}