import User from "@/models/user";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");

    try {
        if (!token) {
            return NextResponse.json({
                success: false,
                message: 'Token is required'
            }, {
                status: 400
            });
        }
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string);
        const user = await User.findById({ _id: decoded._id });
        if (!user) {
            return NextResponse.json({
                success: false,
                message: 'User not found'
            }, {
                status: 404
            });
        }
        return NextResponse.json({
            success: true,
            message: 'User data retrieved successfully',
            user: user
        }, {
            status: 200
        })
    } catch (error) {
        console.log('error while getting me', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to retrieve user data',
            error: (error as Error).message
        }, {
            status: 500
        })
    }
}