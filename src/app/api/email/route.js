import sendContactEmail from "@/utils/contactEmail"
import { NextResponse } from "next/server";

export const POST = async(req)=> {
    const {email, name, subject, message} = await req.json()

    try {

        const logoUrl = `${process.env.CLIENTURL}/assets/logo/acacia-white.png`;
        await sendContactEmail(name, email, message, subject, logoUrl)

        return NextResponse.json({message: "Email sent successfully"}, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error in sending message"},
            { status: 500 }
        );
    }
}