import { connectToDb } from "../../../../../lib/utils";
import User from "../../../../../lib/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"

connectToDb();

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;
        const user =  await User.findOne({email});
        if(user){
            return NextResponse.json({error: "user already exists", status: 400})
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser =  new User({
            username,
            email,
            password: hashedPassword
         });
         try {
            const result = await User.create(newUser);
            
         } catch (error) {
            console.log("error while attempting to add user.", error);
            
         }

        return NextResponse.json({ message: "user created Successfully", status: 201 });
    } 
    catch (error:any) {
        return NextResponse.json({error: error.message}, {status:500})
        
    }
    
}