'use client'
import Layout from "@/components/template/Layout";
import { publicRequest } from "@/requestMethods";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";

// const transactions = [
//     { id: '13059765', title: 'buy phone', category: 'General Merchandise', date: 'Oct 21, 2024', amount: '$200.00', currency: 'USD', role: 'Seller', status: 'completed' },
//     { id: '11849215', title: 'Purchase of equipment', category: 'General Merchandise', date: 'Apr 21, 2022', amount: '$495.60', currency: 'USD', role: 'Buyer', status: 'pending' },
//     { id: '11757903', title: 'Land', category: 'General Merchandise', date: 'Mar 04, 2022', amount: '€2,065.00', currency: 'EUR', role: 'Buyer', status: 'shipped' },
//     { id: '11757883', title: 'Phone', category: 'General Merchandise', date: 'Mar 04, 2022', amount: '£300.00', currency: 'GBP', role: 'Seller', status: 'awaiting' },
//   ];
  
  const TransactionTable = () => {

    const [transactions, setTransactions] = useState(null)
    const [loading, setLoading] = useState(false)
    const user = useSelector(state => state.user.info)
    const router = useRouter()

    useEffect(()=> {
      if(!user) router.push('/home')
      const getTransactions = async()=> {
        try {
          setLoading(true)
          const res = await publicRequest.get(`transaction/${user?._id}`)
          setTransactions(res?.data?.transactions)
          setLoading(false)

          // console.log(res.data)
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      }

      getTransactions()
    }, [user])


    const getStatusColor = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-700";
              case "completed":
                return "bg-green-100 text-green-700";
              case "canceled":
                return "bg-gray-100 text-gray-500";
              case "awaiting":
                return "bg-blue-100 text-blue-700";
              case "processing":
                return "bg-teal-100 text-teal-700";
              case "delivered":
                return "bg-purple-100 text-purple-700";
              case "shipped":
                return "bg-indigo-100 text-indigo-700";
          default:
            return 'text-gray-600 bg-gray-200';
        }
      };


    return (
      <Layout>
      <div className="max-w-5xl mx-auto mt-8 px-5 md:px-10 lg:px-16">
        <h2 className="text-xl font-bold text-blue-900 mb-4">My Transactions</h2>
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <input
              type="text"
              placeholder="Search transaction"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-teal-500"
            />
            <button className="text-teal-500 hover:underline">Filter</button>
          </div>
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <FadeLoader color="#0e4e40" />
              </div>
            ) : transactions?.length > 0 ? (
              <table className="w-full text-left table-auto">
                <thead className="bg-teal-500 text-white">
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Transaction Title</th>
                    <th className="p-4">Created</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-50">
                  {transactions?.map((transaction, index) => (
                    <tr
                      key={transaction._id}
                      onClick={() => router.push(`/transactions/${transaction.tid}`)}
                      className={`${index % 2 === 0 ? 'bg-gray-100' : ''} cursor-pointer`}
                    >
                      <td className="p-4 font-medium text-blue-900">{transaction.tid}</td>
                      <td className="p-4">
                        <span className="font-semibold text-blue-900">{transaction.title}</span>
                        <br />
                        <span className="text-gray-500">{transaction.item.category}</span>
                      </td>
                      <td className="p-4 text-gray-700">
                        {new Date(transaction.createdAt)
                          .toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: '2-digit' })
                          .replace(/ /g, ' ')}
                      </td>
                      <td className="p-4 text-gray-700">
                        {transaction.item.price} <span className="text-gray-500">{transaction.currency}</span>
                      </td>
                      <td className="p-4 text-gray-700">{transaction.userRole}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 ${getStatusColor(transaction.status)} rounded-full`}>
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center py-8">
                <p className="text-gray-600 mb-4">No transactions yet</p>
                <button
                  onClick={() => router.push('/')}
                  className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                >
                  Start a Transaction
                </button>
              </div>
            )}
          </div>
          {!loading && transactions?.length > 0 && (
            <div className="p-4 text-gray-600 text-right">
              You are viewing {transactions?.length} transaction{transactions?.length > 1 ? 's' : ''}
            </div>
          )}
        </div>
      </div>
    </Layout>
    );
  };
  
  export default TransactionTable;