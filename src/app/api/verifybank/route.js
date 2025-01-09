import { NextResponse } from "next/server"
const Flutterwave = require('flutterwave-node-v3')


export const POST = async (req) => {
    try {
        const {account_number, account_bank}= await req.json()
        console.log(account_bank, account_number)
        const flw = new Flutterwave("FLWPUBK-59d89542e1f64ffd9f40b75a01ec8950-X", "FLWSECK-a5872b65f0ceb4f17ae1cf97a2ccc456-1944c51c565vt-X");
        
        const payload = {"account_number": account_number, "account_bank": account_bank};
        const response = await flw.Misc.verify_Account(payload);


        return new NextResponse(JSON.stringify(response), {status: 200})

    } catch (error) {
        return new NextResponse("Error in getting data" + error, {status: 500} )
    }
}