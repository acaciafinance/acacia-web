const ConfirmDelivery = ({ onConfirmDelivery }) => {
    return (
      <div className="border border-green-300 bg-green-50 p-4 rounded-md mb-6">
        <h2 className="text-green-700 font-semibold">Confirm Delivery</h2>
        <p className="text-gray-600 mt-2">
          The item has been shipped. Please confirm if you have received the item.
        </p>
        <button
          onClick={onConfirmDelivery}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Confirm Delivery
        </button>
      </div>
    );
  };
  
  export default ConfirmDelivery;