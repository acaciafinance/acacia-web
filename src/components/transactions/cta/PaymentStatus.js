import React from 'react'

const PaymentStatus = () => {
  return (
    <div className="border border-red-300 bg-red-50 p-4 rounded-md mb-6">
        <h2 className="text-red-700 font-semibold">Awaiting Payment</h2>
        <p className="text-gray-600 mt-2">
            Waiting for the buyer to complete the payment.
        </p>
    </div>
  )
}

export default PaymentStatus
