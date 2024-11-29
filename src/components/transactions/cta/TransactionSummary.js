import React from 'react'

const TransactionSummary = () => {
  return (
    <div className="border border-teal-300 bg-teal-50 p-4 rounded-md mb-6">
        <h2 className="text-teal-700 font-semibold">Transaction Summary</h2>
        <p className="text-gray-600 mt-2">
            Review the transaction details and provide feedback.
        </p>
        <button className="bg-teal-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-teal-700">
            View Summary and Feedback
        </button>
    </div>
  )
}

export default TransactionSummary
