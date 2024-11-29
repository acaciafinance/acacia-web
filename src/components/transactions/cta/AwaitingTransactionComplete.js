import React from 'react'

const AwaitingTransactionComplete = () => {
  return (
    <div className="border border-teal-300 bg-teal-50 p-4 rounded-md mb-6">
        <h2 className="text-teal-700 font-semibold">Awaiting Buyer Confirmation</h2>
        <p className="text-gray-600 mt-2">
            The buyer has received the item. Please wait for the buyer to complete the transaction
        </p>
        <button className="bg-teal-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-teal-700">
            Contact Support
        </button>
    </div>
  )
}

export default AwaitingTransactionComplete