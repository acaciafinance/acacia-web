import React from 'react'

const MakePayment = ({handlePay}) => {
  return (
    <div className="border border-green-300 bg-green-50 p-4 rounded-md mb-6">
        <h2 className="text-green-700 font-semibold">Make Payment</h2>
        <p className="text-gray-600 mt-2">
            Please make the payment to initiate the transaction.
        </p>
        <button onClick={handlePay} className="bg-green-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-700">
            Pay Now
        </button>
    </div>
  )
}

export default MakePayment
