import { publicRequest, userRequest } from "@/requestMethods"
import { updateError, updateStart, updateSuccess } from "./userSlice"
import axios from "axios"
// import { headers } from "next/headers"


export const login = async (user, dispatch) => {
    dispatch(updateStart())

    try {
        const res = await publicRequest.post('auth/login', user)
        dispatch(updateSuccess(res.data))

        return res
    } catch (error) {
        dispatch(updateError())
        throw error
    }
}

export const saveTransaction = async(data, userId) => {
    try {
        const res = await publicRequest.post(`transaction/new/${userId}`, data)
        return res
    } catch (error) {
        console.log(error)
    }
}


export const acceptInvite = async (tid, userEmail, userId) => {
    try {
        const response = await userRequest.put(`transaction/accept-invite/${userId}`, {
            tid,
            userEmail
        });
        if (response.status === 200) {
            console.log('hurray!!!')
            // router.push(`/transaction/${response.data.tid}`);
        }
    } catch (error) {
        console.error('Failed to accept invite:', error);
    }
}


export const getInvitedTransaction = async (email)=> {
    try {
        const res = await publicRequest.get(`transaction/invited?email=${email}`,)
        // console.log(res.data)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getProcessingTransaction = async (userId)=> {
    try {
        const res = await publicRequest.get(`transaction/processing?userId=${userId}`,)
        // console.log(res.data)
        return res
    } catch (error) {
        console.log(error)
    }
}


export const getSingleTransaction = async (userId, tid)=> {
    try {
        const res = await publicRequest.get(`transaction/single/${userId}/${tid}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const handleDeliver = async (seller, tid)=> {
    try {
        const res = await publicRequest.put(`transaction/deliver`, {
            seller, 
            tid
        })
        return res.data 
    } catch (error) {
        console.log(error)
    }
}


export const handleConfirmDeliver = async (buyer, tid)=> {
    try {
        const res = await publicRequest.put(`transaction/confirm-deliver`, {
            buyer, 
            tid
        })
        return res.data 
    } catch (error) {
        console.log(error)
    }
}


export const handleConfirmComplete = async (buyer, tid)=> {
    try {
        const res = await publicRequest.put(`transaction/complete`, {
            buyer, 
            tid
        })
        return res.data 
    } catch (error) {
        console.log(error)
    }
}

export const initiateTransfer = async (transferData) => {
    try {
        const { data: response } = await axios.post("/api/payseller", transferData);

        console.log("Transfer successful:", response);

        if (response.status === "success") {
            // Save payment in the database
            await publicRequest.post("finance/save-payment", response.data);
        }

        return response;
    } catch (error) {
        console.error("Error initiating transfer:", error.message || error);
        throw error;
    }
};



