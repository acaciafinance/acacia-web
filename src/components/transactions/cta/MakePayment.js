import { useRouter } from 'next/navigation'
import React from 'react'
import { PaystackButton } from 'react-paystack'


const MakePayment = ({userDetails, transaction, amount}) => {

  const router = useRouter()
  return (
    <div className="border border-green-300 bg-green-50 p-4 rounded-md mb-6">
        <h2 className="text-green-700 font-semibold">Make Payment</h2>
        <p className="text-gray-600 mt-2">
            Please make the payment to initiate the transaction.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-700">
            <PaystackButton
              text='Pay now'
              email={userDetails?.email}
              amount={amount * 100}
              currency='NGN'
              publicKey={process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY}
              onSuccess={()=> router.push(`/transactions/${transaction?.tid}`)}
              onClose={()=> alert('payment closed')}
              metadata={
                {
                  userId: userDetails?._id,
                  id: transaction?._id
                }
              }
            />
        </button>
    </div>
  )
}

export default MakePayment
