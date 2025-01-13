import { useEffect, useState } from "react";
// import { banks } from "./data/bank";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest, userRequest } from "@/requestMethods";
import { updateSuccess } from "@/redux/userSlice";
import { banks } from "./data/bankData";
import axios from "axios";


const Payment = ({paymentData}) => {
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountName, setAccountName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [fetchErrorMsg, setFetchErrorMsg] = useState(null);
    const [isAddingAccount, setIsAddingAccount] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBanks, setFilteredBanks] = useState(banks);
    const [showDropdown, setShowDropdown] = useState(false);


    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = banks.filter((bank) =>
          bank.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredBanks(filtered);
      };
    
      const handleBankSelect = (selectedBank) => {
        setBankName(selectedBank);
        setShowDropdown(false); // Close the dropdown after selection
      };

    // Filter the banks based on the search query
    // const filteredBanks = banks.filter((bank) =>
    //     bank.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    const userDetails = useSelector(state => state.user.info);
    const dispatch = useDispatch();

    const findCodeByName = (name) => {
        const bank = banks.find(bank => bank.name === name);
        return bank ? bank.code : null;
    };
    
    const bankCode = findCodeByName(bankName);
    // const apiUrl = `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`;
    const apiUrl = `https://api.flutterwave.com/v3/accounts/resolve`
    // console.log(bankCode)

    useEffect(() => {
        const validateAccount = async () => {
          if (accountNumber.length === 10 && bankName && bankCode) {
            setIsLoading(true);
            
            try {
                
                const response = await axios.post('/api/verifybank', {
                    account_number: `${accountNumber}`,
                    account_bank: `${bankCode}`
                });

                if (response.data.status === 'success') {
                    setAccountName(response?.data?.data?.account_name)
                } else {
                    setFetchErrorMsg("Account validation failed.")
                }

                // console.log(response.data)
            } catch (error) {
                // console.log(error)
            }
          } else {
            setAccountName("");
          }
        };
      
        validateAccount();
      }, [accountNumber, bankName, bankCode, apiUrl]);

    const handleSaveAccount = async () => {
        if (!bankName || !accountName || !accountNumber) {
            // console.log("All fields are required.");
            return;
        }
        try {
            const response = await publicRequest.put(`/users/${userDetails._id}`, {
                bankDetails: {
                    
                    bankName,
                    accountName,
                    accountNumber,
                    bankCode: bankCode
                },
            });
            if (response.status === 200) {
                dispatch(updateSuccess({
                    ...userDetails,
                    bankDetails: {
                        bankName,
                        accountName,
                        accountNumber,
                        bankCode
                    },
                }));
                setIsAddingAccount(false);
            }
        } catch (error) {
            console.error("Error saving account details:", error);
        }
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
    
        // Get day, month (short), year, hours, and minutes
        const day = date.getUTCDate();
        const month = date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
        const year = date.getUTCFullYear();
    
        let hours = date.getUTCHours();
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
    
        // Convert 24-hour format to 12-hour format
        hours = hours % 12 || 12;
    
        return `${day} ${month} ${year}, ${hours}:${minutes} ${amOrPm}`;
    }

    // const paymentData = [
    //     { id: 1, type: "Deposit", amount: "$500", date: "2024-10-01" },
    //     { id: 2, type: "Settlement", amount: "$300", date: "2024-10-15" },
    // ];

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">Payments</h2>

            {/* Payment Table */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Transaction History</h3>
                {paymentData && paymentData.length > 0 ? (
                    <table className="w-full mt-4 border">
                        <thead className="bg-blue-900 text-white">
                            <tr>
                                <th className="p-2">Type</th>
                                <th className="p-2">Amount</th>
                                <th className="p-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentData.map(transaction => (
                                <tr key={transaction._id} className="border-b">
                                    <td className="p-2 text-center">{transaction?.type}</td>
                                    <td className="p-2 text-center">&#8358;{transaction.amount}</td>
                                    <td className="p-2 text-center">{formatDate(transaction.createdAt)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center mt-6">
                        <p className="text-gray-600">No payment record found.</p>
                        <button 
                            className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
                            onClick={startTransaction} // Replace this with your transaction initiation function
                        >
                            Start a Transaction
                        </button>
                    </div>
                )}
            </div>

            {/* Disbursement Account Details */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">Disbursement Account</h3>
                {Object.keys(userDetails?.bankDetails || {}).length !== 0 ?  (
                    <div className="mt-4 p-4 border rounded-md bg-gray-50">
                        <p><span className="font-semibold">Account Name:</span> {userDetails?.bankDetails?.accountName}</p>
                        <p><span className="font-semibold">Account Number:</span> {userDetails?.bankDetails?.accountNumber}</p>
                        <p><span className="font-semibold">Bank Name:</span> {userDetails?.bankDetails?.bankName}</p>
                    </div>
                ) : (
                    <div className="mt-4 text-gray-700">
                        <p>No disbursement account added.</p>
                        <button
                            onClick={() => setIsAddingAccount(true)}
                            className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-md"
                        >
                            Add Account
                        </button>
                    </div>
                )}

                {/* Add Account Form */}
                {isAddingAccount && (
                    <div className="mt-6">
                    <h4 className="text-md font-semibold text-gray-800">Add Disbursement Account</h4>
                    <div className="space-y-4 mt-4">
                      {/* Search Input for Banks */}
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Bank Name</label>
                        <div
                            className="relative mt-1"
                            onClick={(e) => {setShowDropdown((prev) => !prev);e.stopPropagation()}} // Toggle dropdown visibility
                        >
                            <div className="border p-2 rounded-md bg-white cursor-pointer">
                            {bankName || "Select a bank"}
                            </div>

                            {/* Dropdown */}
                            {showDropdown && (
                            <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg" onClick={(e)=> e.stopPropagation()}>
                                <div className="p-2">
                                {/* Search Box */}
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    placeholder="Search for a bank..."
                                    className="p-2 w-full border rounded-md"
                                />
                                </div>
                                <ul className="max-h-60 overflow-auto">
                                {/* Filtered Banks */}
                                {filteredBanks.length > 0 ? (
                                    filteredBanks.map((bank, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleBankSelect(bank.name)}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {bank.name}
                                    </li>
                                    ))
                                ) : (
                                    <li className="p-2 text-gray-500">No banks found</li>
                                )}
                                </ul>
                            </div>
                            )}
                        </div>
                    </div>
                
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Account Number</label>
                        <input
                          type="text"
                          value={accountNumber}
                          onChange={(e) => setAccountNumber(e.target.value)}
                          className="mt-1 p-2 border rounded-md w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Account Name</label>
                        <input
                          type="text"
                          value={accountName}
                          disabled
                          className="mt-1 p-2 border rounded-md w-full"
                        />
                      </div>
                      <button
                        onClick={handleSaveAccount}
                        className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md"
                      >
                        Save Account
                      </button>
                    </div>
                  </div>
                )}
            </div>
        </div>
    );
};

export default Payment;