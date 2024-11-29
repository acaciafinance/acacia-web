const TransactionModal = ({ transaction, isOpen, onClose, onAccept, onDecline, userEmail }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    ×
                </button>
                <h2 className="text-2xl font-semibold text-teal-800 mb-4">Transaction Invitation</h2>

                <div className="mb-4">
                    <p className="text-gray-600">
                        <span className="font-semibold">Title:</span> {transaction.title}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Item:</span> {transaction.item.name}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Invitee:</span> {transaction.startingParty}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Amount:</span> {transaction.currency} {transaction.item.price}
                    </p>
                    {transaction.toPayFee === 'buyer' && transaction?.buyerEmail === userEmail &&
                     <p className="text-gray-600">
                        <span className="font-semibold">Fee:</span> {transaction.currency} {transaction.fee}
                    </p>}
                    <p className="text-gray-600">
                        <span className="font-semibold">Status:</span> {transaction.status}
                    </p>
                </div>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={onDecline}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Decline
                    </button>
                    <button
                        onClick={onAccept}
                        className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-900 transition-colors"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionModal;