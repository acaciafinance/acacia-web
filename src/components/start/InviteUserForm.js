import React from 'react'

const InviteUserForm = ({info, setToPayFee, setEmail, onStart, setCurrentStep, isSubmitting, fee}) => {

  // console.log(info)
  return (
    <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 mx-auto max-w-4xl border border-gray-200">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Start Transaction</h2>

      {/* Transaction title */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="transactionTitle">
          Transaction Title
        </label>
        <input
          id="transactionTitle"
          type="text"
          value={info.transactionTitle}
          disabled
          className="bg-gray-100 border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition duration-150"
        />
      </div>

      {/* My role, Currency, Inspection period */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="role">
            My Role
          </label>
          <select
            id="role"
            value={info.role}
            disabled
            className="bg-gray-100 border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition duration-150"
          >
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="currency">
            Currency
          </label>
          <select
            id="currency"
            value={info.currency}
            disabled
            className="bg-gray-100 border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition duration-150"
          >
            <option value="NGN">NGN</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="inspectionPeriod">
            Inspection Period (Days)
          </label>
          <input
            id="inspectionPeriod"
            type="number"
            value={info.inspectionPeriod}
            disabled
            className="bg-gray-100 border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition duration-150"
          />
        </div>
      </div>

      {/* Transaction details */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Transaction Details</h3>
      <div className="relative group">
        {/* Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-gray-800">{info.itemName}</p>
              <p className="text-gray-500">{info.itemCategory}</p>
              <p className="text-sm text-gray-500">{info.itemDescription}</p>
              <p className="text-sm text-gray-500">Inspection Period: {info.inspectionPeriod} Day</p>
            </div>
            <p className="text-2xl font-semibold text-indigo-600">{info.currency} {info.price}</p>
          </div>
        </div>

        {/* Overlay for editing (hidden by default) */}
        <div className="absolute inset-0 bg-indigo-200 bg-opacity-75 opacity-0 group-hover:opacity-100 flex justify-center items-center rounded-lg transition-opacity duration-300">
          <button onClick={()=> setCurrentStep(1)} className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-indigo-100">
            Edit Item
          </button>
        </div>
      </div>

      {/* <div className="flex justify-start mb-6">
        <button className="bg-indigo-100 text-indigo-600 font-semibold py-2 px-4 rounded-md hover:bg-indigo-200 focus:outline-none transition-all duration-300">
          + Add Item
        </button>
      </div> */}

      {/* Transaction Summary */}
      <div className="bg-white md:shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 lg:w-2/3 mx-auto my-8 md:p-6">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Transaction Summary</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-indigo-100 text-gray-700 text-left">
                <th className="py-3 px-6 text-lg font-semibold">Description</th>
                <th className="py-3 px-6 text-lg font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="py-4 px-6 text-gray-700 text-lg">Subtotal</td>
                <td className="py-4 px-6 font-semibold text-indigo-600 text-lg">₦{info.price}</td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="py-4 px-6 text-gray-700 text-lg">Escrow fee paid by</td>
                <td className="py-4 px-6 font-semibold text-green-600 text-lg">
                  <div>
                    <select onChange={(e)=> setToPayFee(e.target.value)} defaultValue={'buyer'} className=' bg-transparent outline-none'>
                      <option value="buyer">Buyer</option>
                      {/* <option value="seller">Seller</option> */}
                    </select>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="py-4 px-6 text-gray-700 text-lg">Escrow fee</td>
                <td className="py-4 px-6 font-semibold text-gray-900 text-lg">₦{fee}</td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="py-4 px-6 text-gray-700 text-lg">Buyer Price</td>
                <td className="py-4 px-6 font-semibold text-indigo-600 text-lg">
                  ₦{(Number(info.price) + Number(fee)).toLocaleString()}
                </td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="py-4 px-6 text-gray-700 text-lg">Seller Proceeds</td>
                <td className="py-4 px-6 font-semibold text-gray-900 text-lg">₦{info.price}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-gray-100">
                <td className="py-4 px-6 text-sm text-gray-500" colSpan="2">
                  All prices are in NGN. Taxes may apply.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Buyer Details */}
      {/* <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="buyer"
          className="mr-3 h-5 w-5 text-indigo-600 border-gray-300 rounded"
          defaultChecked
          disabled
        />
        <label className="text-lg text-gray-700" htmlFor="buyer">
          I have a buyer for this transaction
        </label>
      </div> */}

      <div className=' mt-8'>
        <p>
          Invite {info.role  === 'buyer'? 'seller' : 'buyer'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-5">
        
        <div>
          <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="example@domain.com"
            className="bg-gray-100 border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition duration-150"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="phone">
            Phone
          </label>
          <div className="flex">
            <select
              id="countryCode"
              className="bg-gray-100 border border-gray-300 rounded-l-lg py-3 px-4 text-gray-700 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition duration-150 w-1/4"
            >
              <option value="+234">🇳🇬 +234</option>
            </select>
            <input
              id="phone"
              type="text"
              name='phone'
              className="bg-gray-100 border border-gray-300 rounded-r-lg w-full py-3 px-4 text-gray-700 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition duration-150"
            />
          </div>
        </div>
      </div>

      {/* Agreement Checkbox */}
      {/* <div className="mb-6">
        <input type="checkbox" id="agreement" className="mr-3 h-5 w-5 text-indigo-600 border-gray-300 rounded" disabled />
        <label htmlFor="agreement" className="text-lg text-gray-700">
          I have read and agree to the{' '}
          <a href="#" className="text-indigo-600 underline hover:text-indigo-800 transition-all">General Escrow Instructions</a> and{' '}
          <a href="#" className="text-indigo-600 underline hover:text-indigo-800 transition-all">Privacy Policy</a>.
        </label>
      </div> */}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
        className={`bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 
          ${isSubmitting ? 'cursor-not-allowed opacity-75' : 'hover:bg-indigo-600'}
        `}
        onClick={onStart}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
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
                d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
              ></path>
            </svg>
            Processing...
          </div>
        ) : (
          'Start Transaction'
        )}
      </button>
      </div>
    </div>
  )
}

export default InviteUserForm
