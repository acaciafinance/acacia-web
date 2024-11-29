import React from 'react'

const DeliveryCTA = ({onDeliver}) => {
  return (
    <div className="border border-purple-300 bg-purple-50 p-4 rounded-md mb-6">
        <h2 className="text-purple-700 font-semibold">Prepare for Delivery</h2>
        <p className="text-gray-600 mt-2">
        Payment is confirmed, please proceed with the delivery.
        </p>
        <button onClick={onDeliver} className="bg-purple-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-purple-700">
            I have delivered
        </button>
    </div>
  )
}

export default DeliveryCTA
