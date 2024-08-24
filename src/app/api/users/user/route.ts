import { getDataToken } from "@/helpers/getDataToken";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../lib/userModel";
import { connectToDb } from "../../../../../lib/utils";

connectToDb();

export async function GET(request:NextRequest){
    try {
        const userID =getDataToken(request);
        const user = await User.findOne({ username: userID }).select("-password ");
         return NextResponse.json({
            message:"user found",
            data: user
         }, {status:200})

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:404});
    }
}

