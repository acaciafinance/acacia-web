import { NextResponse } from "next/server"
const Flutterwave = require('flutterwave-node-v3')


export const POST = async (req) => {
    try {
        const { bankCode, accountNumber, amount, tid, userId } = await req.json();

        // Prepare the payload
        const payload = {
            account_bank: bankCode, 
            account_number: accountNumber.toString(), 
            amount: amount, 
            narration: "Acacia Payment Settlement", 
            currency: "NGN", 
            reference: `${Date.now()}`,
            meta: {
                userId: userId,
                tid: tid
            }
        }

        // console.log(payload)


        const flw = new Flutterwave(process.env.FLUTTERWAVE_PUBLIC_KEY, process.env.FLUTTERWAVE_SECRET_KEY)

        const response = await flw.Transfer.initiate(payload)

        if (response.status === "success") {
            return NextResponse.json(response, { status: 200 });
        } else {
            return NextResponse.json({ message: response?.message });
        }
    } catch (error) {
        console.error("Error initiating transfer:", error);
        return NextResponse.json(
            { message: "Error in initiating transfer", error: error.message },
            { status: 500 }
        );
    }
}