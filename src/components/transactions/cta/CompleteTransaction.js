import React from 'react'

const CompleteTransaction = ({ onComplete, sellerAccountStatus }) => {
  const handleComplete = () => {
    if (!sellerAccountStatus) {
      alert("The seller has not updated their bank account details. Please prompt the seller to provide this information before completing the transaction.");
      return;
    }
    onComplete(); // Proceed with completing the transaction
  };

  return (
    <div className="border border-blue-300 bg-blue-50 p-4 rounded-md mb-6">
      <h2 className="text-blue-700 font-semibold">Complete Transaction</h2>
      <p className="text-gray-600 mt-2">
        Confirm the completion of the transaction and provide feedback.
      </p>
      <button
        onClick={handleComplete}
        className={`px-4 py-2 mt-4 rounded-md text-white ${
          sellerAccountStatus ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!sellerAccountStatus} // Disable the button if sellerAccountStatus is false
      >
        Complete Transaction
      </button>
      {!sellerAccountStatus &&<p className=' text-xs text-red-400 mt-3'>
        The seller has not updated their bank account details. Please prompt the seller to provide this information before completing the transaction.
      </p>}
    </div>
  );
};

export default CompleteTransaction;