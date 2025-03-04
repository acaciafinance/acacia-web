import { metadata } from "@/app/page";
import { NextResponse } from "next/server"
const Flutterwave = require('flutterwave-node-v3')


// export const POST = async (req) => {
//     try {
//         const { bankCode, accountNumber, amount, tid, userId } = await req.json();

//         // Prepare the payload
//         const payload = {
//             account_bank: bankCode, 
//             account_number: accountNumber.toString(), 
//             amount: amount, 
//             narration: "Acacia Payment Settlement", 
//             currency: "NGN", 
//             reference: `${Date.now()}`,
//             meta: {
//                 userId: userId,
//                 tid: tid
//             }
//         }

//         // console.log(payload)


//         const flw = new Flutterwave(process.env.FLUTTERWAVE_PUBLIC_KEY, process.env.FLUTTERWAVE_SECRET_KEY)

//         const response = await flw.Transfer.initiate(payload)

//         if (response.status === "success") {
//             return NextResponse.json(response, { status: 200 });
//         } else {
//             return NextResponse.json({ message: response?.message });
//         }
//     } catch (error) {
//         console.error("Error initiating transfer:", error);
//         return NextResponse.json(
//             { message: "Error in initiating transfer", error: error.message },
//             { status: 500 }
//         );
//     }
// }



export const POST = async (req) => {
    try {
        const { bankCode, accountNumber, amount, tid, userId, recipientName } = await req.json();
        // console.log(bankCode, accountNumber, amount, tid, userId, recipientName)
        // const bankCode = "999992"; // Access Bank
        // const accountNumber = "8136626559";
        // const amount = 200;
        // const tid = "67bbabf3ec991dd94d5fe464"
        // const userId = "674c985b9f33edf697216c85";
        // const recipientName = "femi";

        const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

        // Step 1: Create Transfer Recipient
        const recipientPayload = {
            type: "nuban",
            name: recipientName, // Beneficiary name
            account_number: accountNumber,
            bank_code: bankCode,
            currency: "NGN",
            metadata: {
                userId,
                tid
            }
        };


        const fetchWithTimeout = async (url, options, timeout = 30000) => {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);
            
            try {
                const response = await fetch(url, { ...options, signal: controller.signal });
                clearTimeout(timeoutId);
                return response;
            } catch (error) {
                console.error(`Request to ${url} failed:`, error);
                throw new Error("Request timeout or fetch failed");
            }
        };

        const recipientRes = await fetchWithTimeout("https://api.paystack.co/transferrecipient", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipientPayload)
        });

        const recipientData = await recipientRes.json();

        if (!recipientData.status) {
            return NextResponse.json({ message: recipientData.message }, { status: 400 });
        }

        const recipientCode = recipientData.data.recipient_code; // Needed for transfer

        // Step 2: Initiate Transfer
        const transferPayload = {
            source: "balance",
            reason: "Acacia Payment Settlement",
            amount: amount * 100, // Convert to kobo
            recipient: recipientCode,
            reference: `TRANS_${Date.now()}`,
            metadata: {
                userId,
                tid
            }
        };

        const transferRes = await fetch("https://api.paystack.co/transfer", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transferPayload)
        });

        const transferData = await transferRes.json();

        if (transferData.status) {
            return NextResponse.json(transferData, { status: 200 });
        } else {
            return NextResponse.json({ message: transferData.message }, { status: 400 });
        }
    } catch (error) {
        console.error("Error initiating transfer:", error);
        return NextResponse.json(
            { message: "Error in initiating transfer", error: error.message },
            { status: 500 }
        );
    }
};