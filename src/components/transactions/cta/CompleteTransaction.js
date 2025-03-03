import React from 'react'

const CompleteTransaction = ({ onComplete, loading, sellerAccountStatus }) => {
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
        className={`px-4 py-2 mt-4 rounded-md text-white flex items-center justify-center ${
          sellerAccountStatus && !loading
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!sellerAccountStatus || loading} // Disable the button if sellerAccountStatus is false or loading is true
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
            ></path>
          </svg>
        ) : (
          "Complete Transaction"
        )}
      </button>
      {!sellerAccountStatus &&<p className=' text-xs text-red-400 mt-3'>
        The seller has not updated their bank account details. Please prompt the seller to provide this information before completing the transaction.
      </p>}
    </div>
  );
};

export default CompleteTransaction;