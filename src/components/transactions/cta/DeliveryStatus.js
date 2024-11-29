import React from 'react'

const DeliveryStatus = () => {
  return (
    <div className="border border-yellow-300 bg-yellow-50 p-4 rounded-md mb-6">
        <h2 className="text-yellow-700 font-semibold">Delivery in Progress</h2>
        <p className="text-gray-600 mt-2">
            The seller is currently delivering the product or service.
        </p>
    </div>
  )
}

export default DeliveryStatus
