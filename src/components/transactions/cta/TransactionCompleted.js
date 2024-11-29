const TransactionCompleted = () => {
    return (
      <div className="border border-blue-300 bg-blue-50 p-4 rounded-md mb-6">
        <h2 className="text-blue-700 font-semibold">Transaction Completed</h2>
        <p className="text-gray-600 mt-2">
          This transaction has been successfully completed. Thank you for using our service!
        </p>
        <div className="mt-4">
          <p className="text-gray-600">
            If you need assistance or have any concerns, please{" "}
            <a
              href="/contact-support"
              className="text-blue-600 underline hover:text-blue-800"
            >
              contact our support team
            </a>.
          </p>
        </div>
      </div>
    );
  };
  
  export default TransactionCompleted;