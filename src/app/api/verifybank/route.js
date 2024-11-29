import { NextResponse } from "next/server"
const Flutterwave = require('flutterwave-node-v3')


export const POST = async (req) => {
    try {
        const {account_number, account_bank}= await req.json()
        console.log(account_bank, account_number)
        const flw = new Flutterwave("FLWPUBK_TEST-3d57a275d12cc017fc463fd1b36e2a0b-X", "FLWSECK-39cc7683d231c4d18890ab199cb67f1d-18cf9942a62vt-X");
        
        const payload = {"account_number": account_number, "account_bank": account_bank};
        const response = await flw.Misc.verify_Account(payload);


        return new NextResponse(JSON.stringify(response), {status: 200})

    } catch (error) {
        return new NextResponse("Error in getting data" + error, {status: 500} )
    }
}