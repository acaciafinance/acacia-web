import React from 'react'
import { useForm } from 'react-hook-form';

const AddItemForm = ({register, handleSubmit, onSubmit, errors, handleNextStep}) => {

    
  return (
    <div className=' bg-white shadow-lg rounded-md p-5 md:p-10'>
      <div className=' '>
        <div className="flex justify-center mt-8 text-neutral-500">
            <form
                onSubmit={handleSubmit(handleNextStep)}
                className=" mb-4 max-w-3xl w-full"
            >
                <h2 className="text-2xl font-semibold mb-4">Start Transaction</h2>
                
                {/* Transaction title */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transactionTitle">
                        Transaction title
                    </label>
                    <input
                        {...register("transactionTitle", { required: "Transaction title is required" })}
                        id="transactionTitle"
                        type="text"
                        placeholder="Transaction title"
                        className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.transactionTitle ? "border-red-500" : ""}`}
                    />
                    {errors.transactionTitle && <p className="text-red-500 text-xs mt-1">{errors.transactionTitle.message}</p>}
                </div>

                {/* My role, Currency, Inspection period */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* My role */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                        My role
                        </label>
                        <select
                        {...register("role", { required: "Role is required" })}
                        id="role"
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                        <option value="seller">Seller</option>
                        <option value="buyer">Buyer</option>
                        </select>
                    </div>

                    {/* Currency */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currency">
                        Currency
                        </label>
                        <select
                        {...register("currency", { required: "Currency is required" })}
                        id="currency"
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="NGN">NGN</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>

                    {/* Inspection period */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inspectionPeriod">
                        Inspection period (days)
                        </label>
                        <input
                        {...register("inspectionPeriod", { required: "Inspection period is required", min: 1 })}
                        id="inspectionPeriod"
                        type="number"
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue={1}
                        />
                        {errors.inspectionPeriod && <p className="text-red-500 text-xs mt-1">Inspection period must be at least 1 day</p>}
                    </div>
                </div>

                {/* Transaction details */}
                <h3 className="text-lg font-semibold mb-4 mt-5 md:mt-10">Transaction details</h3>

                {/* Item name, Price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Item name */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                            Item name
                        </label>
                        <input
                        {...register("itemName", { required: "Item name is required" })}
                        id="itemName"
                        type="text"
                        className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.itemName ? "border-red-500" : ""}`}
                        />
                        {errors.itemName && <p className="text-red-500 text-xs mt-1">{errors.itemName.message}</p>}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                        {...register("price", { required: "Price is required", min: 1 })}
                        id="price"
                        type="number"
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        // default from the image
                        />
                        {errors.price && <p className="text-red-500 text-xs mt-1">Price must be at least $1</p>}
                    </div>
                </div>

                {/* Item category */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemCategory">
                        Item category
                    </label>
                    <input
                        {...register("itemCategory", { required: "Item category is required" })}
                        id="itemCategory"
                        type="text"
                        className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.itemCategory ? "border-red-500" : ""}`}
                    />
                    {errors.itemCategory && <p className="text-red-500 text-xs mt-1">{errors.itemCategory.message}</p>}
                </div>

                {/* Item description */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemDescription">
                        Item description
                    </label>
                    <textarea
                        {...register("itemDescription", { required: "Item description is required" })}
                        id="itemDescription"
                        className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.itemDescription ? "border-red-500" : ""}`}
                    ></textarea>
                    {errors.itemDescription && <p className="text-red-500 text-xs mt-1">{errors.itemDescription.message}</p>}
                </div>

                {/* Add Item Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-neutral-300 hover:bg-gray-400 text-neutral-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add item
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddItemForm
