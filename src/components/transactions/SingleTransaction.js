import React, { useEffect, useState } from 'react'
import Layout from '../template/Layout'
import TransactionActions from './cta/TransactionActions'
import { useSelector } from 'react-redux'
import { FadeLoader } from 'react-spinners'
import { getSingleTransaction } from '@/redux/apiCalls'
import { useParams, useRouter } from 'next/navigation'
import { publicRequest } from '@/requestMethods'

const SingleTransaction = () => {

    const user = useSelector(state => state.user.info)
    const params = useParams()
    const router = useRouter()
    const [transaction, setTransaction] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        if (!user) {
          router.push('/home')
        }
      })

    useEffect(()=> {
        const getTrx = async ()=> {

            try {
                const res = await publicRequest.get(`transaction/single/${user?._id}/${params.id}`)
                setTransaction(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                router.push('/transactions')
            }
        }

        getTrx()
    }, [user, params])

    console.log(transaction)

    const userRole = transaction?.buyerEmail === user?.email ? 'buyer' : 'seller';
    const transactionStatus = transaction?.status;


    const hasDisbursementAccount = user?.bankDetails && Object.keys(user.bankDetails).length > 0; // Assumes this field exists in user object
    const showDisbursementWarning = userRole === 'seller' && !hasDisbursementAccount;

    console.log(user)


    if(loading) {
        return (
          <div className=' h-screen flex justify-center items-center'>
              <FadeLoader color='#0e4e40' />
          </div>
        )
      }
    
  return ( user &&
    <Layout>
       <div className="container mx-auto p-4 sm:p-8">
        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Section: Transaction Details */}
            <div className="lg:col-span-2 bg-white p-6 shadow rounded-md">
                {/* Transaction Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold">{transaction?.title}</h1>
                    <p className="text-gray-600 mt-1">
                    Transaction #<span className="font-medium">{transaction?.tid}</span>
                    <span className="ml-2 text-blue-500 cursor-pointer">📋</span>
                    </p>
                    <p className="text-gray-700 mt-2">
                    <span className="font-medium">{transaction?.buyer?.fullName} ({transaction?.buyerEmail})</span> is buying 
                    <span className="font-medium"> {transaction?.item?.name} </span>
                    from <span className="font-medium">{transaction?.seller?.fullName} ({transaction?.sellerEmail})</span>. The inspection period for this transaction is 
                    <span className="font-medium"> {transaction?.inspection} calendar days</span>.
                    </p>
                </div>

                <div>
                    <TransactionActions transaction={transaction} userRole={userRole} transactionStatus={transactionStatus}  />
                </div>

                {/* Verification Call to Action Box */}
                {/* <div className="border border-blue-300 bg-blue-50 p-4 rounded-md mb-6">
                    <h2 className="text-blue-700 font-semibold">Verify your Escrow.com account</h2>
                    <p className="text-gray-600 mt-2">
                    We protect all parties in a transaction by verifying the identity of the involved users. The verification of your account is required.
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700">
                    Verify my account
                    </button>
                </div> */}



                {/* Warning: Disbursement Account */}
                {showDisbursementWarning && (
                    <div className="border border-red-300 bg-red-50 p-4 rounded-md mb-6">
                        <h2 className="text-red-700 font-semibold">Disbursement Account Required</h2>
                        <p className="text-gray-600 mt-2">
                            Please update your disbursement account in <strong>Account &gt; Payment</strong> to receive payments after the transaction is completed.
                        </p>
                        <button
                            onClick={() => router.push('/account')}
                            className="bg-red-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-700"
                        >
                            Update Account
                        </button>
                    </div>
                )}

                {/* Item Details */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Item details</h3>
                    <div className="border border-gray-200 rounded-md p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-medium">
                                    {transaction.item.name}
                                </p>
                                <p className="text-gray-600">
                                    {transaction.item.category}
                                </p>
                            </div>
                            <p className="font-medium">
                                {transaction.currency} {(transaction.item.price).toFixed(2)}
                            </p>
                        </div>
                        {userRole === 'buyer' && transaction.toPayFee === 'buyer' &&
                        <div className="border-t border-gray-200 mt-4 pt-4">
                            <div className="flex justify-between items-center">
                                <span>Escrow Fee</span>
                                <span className="font-medium">
                                    {transaction.currency} {(transaction.fee).toFixed(2)}
                                </span>
                            </div>
                            {/* <div className="flex justify-between items-center mt-2">
                                <span>Total ({transaction.currency})</span>
                                <span className="font-medium text-xl">
                                    {transaction.currency} {(transaction.fee).toFixed(2)}
                                </span>
                            </div> */}
                        </div>}
                        <div className="border-t border-gray-200 mt-4 pt-4">
                            {/* <div className="flex justify-between items-center">
                                <span>Subtotal</span>
                                <span className="font-medium">
                                    {transaction.currency} {(transaction.item.price).toFixed(2)}
                                </span>
                            </div> */}
                            <div className="flex justify-between items-center mt-2">
                                <span>Total ({transaction.currency})</span>
                                <span className="font-medium text-xl">
                                    {transaction.currency} {(transaction.item.price + (userRole === 'buyer' && transaction.toPayFee === 'buyer' ? transaction.fee : 0)).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Right Section: History & FAQ */}
            <div className="bg-gray-50 p-6 shadow rounded-md">
            {/* History */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">History</h3>
                <ul className="space-y-4">
                <li className="text-gray-600">
                    <p className="font-medium">October 22, 2024, 3:27 PM GMT+1</p>
                    <p>Transaction items not supported by Escrow.com</p>
                </li>
                <li className="text-gray-600">
                    <p className="font-medium">October 22, 2024, 6:44 AM GMT+1</p>
                    <p>Both parties have accepted the offer, awaiting buyer payment.</p>
                </li>
                <li className="text-gray-600">
                    <p className="font-medium">October 22, 2024, 6:44 AM GMT+1</p>
                    <p>Buyer has agreed to the terms of this transaction.</p>
                </li>
                <li className="text-gray-600">
                    <p className="font-medium">October 22, 2024, 6:29 AM GMT+1</p>
                    <p>Seller initiates the transaction.</p>
                </li>
                </ul>
            </div>

            {/* FAQ */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <a href="#" className="text-blue-600 hover:underline">
                Need more help?
                </a>
            </div>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default SingleTransaction
