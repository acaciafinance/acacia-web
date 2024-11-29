const ShippedStatus = () => {
    return (
      <div className="border border-blue-300 bg-blue-50 p-4 rounded-md mb-6">
          <h2 className="text-blue-700 font-semibold">Awaiting Delivery Confirmation</h2>
          <p className="text-gray-600 mt-2">
              The item has been shipped. Waiting for the buyer to confirm delivery.
          </p>
      </div>
    )
  }
  
  export default ShippedStatus;