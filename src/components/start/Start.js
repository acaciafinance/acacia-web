'use client'
// import { signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Layout from '../template/Layout'
import AddItemForm from './AddItemForm'
import InviteUserForm from './InviteUserForm'
import { useForm } from 'react-hook-form'
import { acceptInvite, getInvitedTransaction, getProcessingTransaction, saveTransaction } from '@/redux/apiCalls'
import { useSelector } from 'react-redux'
import { useRouter, useSearchParams } from 'next/navigation'
import { FadeLoader } from 'react-spinners'
import TransactionModal from '../transactions/TransactionModal'

const Start = () => {

  const user = useSelector(state => state.user.info)
  const router = useRouter()
  const searchParams = useSearchParams()

  const tid = searchParams.get('tid')
  const userEmail = user?.email
  const userId = user?._id

  
  const [currentStep, setCurrentStep] = useState(1)
  const [info, setInfo] = useState(null)
  const [toPayFee, setToPayFee] = useState('Buyer');  // Fee paid by the buyer
  const [email, setEmail] = useState('example@domain.com');
  const [phone, setPhone] = useState('123456789');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false);
  const [invitedTransaction, setInvitedTransaction] = useState(null);
  
  // console.log(user)

  useEffect(()=> {
    if (!user) {
      router.push('/home')
    }
  })

  // useEffect(()=> {
  //   if (tid && userEmail) {
  //     acceptInvite(tid, userEmail)
  //     setLoading(false)
  //   } else {
  //     setLoading(false)
  //   }
  // }, [tid, userEmail])

  const checkInvitedTransaction = async (userEmail) => {
    try {
      const res = await getInvitedTransaction(userEmail); // Fetch transaction if it exists
      if (res?.status === 200 && res.data?.status === 'awaiting') {
        setInvitedTransaction(res.data);
        setShowPopup(true); // Show popup if awaiting transaction exists
      } else if(res?.status === 200 && res.data?.status === 'processing') {
        router.push(`/transactions/${res.data.tid}`)
      }
    } catch (error) {
      console.error('Error fetching transaction:', error);
    } finally {
      setLoading(false);
    }
  };


  const checkProcessingTransactionForSeller = async (userId) => {
    try {
      const res = await getProcessingTransaction(userId); // Fetch transaction if it exists
      if (res?.status === 200 && res.data?.status === 'processing') {
         router.push(`/transactions/${res.data.tid}`)
      }
    } catch (error) {
      console.error('Error fetching transaction:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      checkInvitedTransaction(user.email);
      checkProcessingTransactionForSeller(userId)
    } else {
      setLoading(false);
    }
  }, [user]);


  

  console.log(invitedTransaction)



  const feePercentage = 1.5; // 1.5% fee
  const fee = (info?.price * feePercentage) / 100;


  const onStart = async () => {
    setIsSubmitting(true);
    const transactionData = {
      title: info.transactionTitle,
      role: info.role.toLowerCase(),  // either 'buyer' or 'seller'
      currency: info.currency,
      inspection: info.inspectionPeriod,
      item: {
        title: info.itemName,
        description: info.itemDescription,
        price: info.price,
        category: info.itemCategory
      },
      fee,  // Escrow fee
      toPayFee: toPayFee.toLowerCase(),  // either 'buyer' or 'seller'
      buyerEmail: email,  // Assuming the user's email is for the buyer
      sellerEmail: email,
    };

    try {
      const res = await saveTransaction(transactionData, user?._id);
      if (res?.status === 201) {
        router.push(`/transactions/${res?.data?.tid}`)
        alert('Transaction successfully created!');
      }
    } catch (error) {
      console.error('Error creating transaction:', error);
      alert('Failed to create transaction.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleNextStep = (data)=> {
    setCurrentStep(2)
    setInfo(data)
  }

  const handlePrevStep = ()=> {
    setCurrentStep(1)
  }

  const onSubmit = (data) => {
    console.log(data);
  };


  const handleAccept = async() => {
    // Handle accept transaction logic
    await acceptInvite(invitedTransaction?.tid, user?.email, user?._id)
    console.log('Transaction accepted');
    setShowPopup(false);
  };

  const handleDecline = () => {
      // Handle decline transaction logic
      console.log('Transaction declined');
      setIsModalOpen(false);
  };

  if(loading) {
    return (
      <div className=' h-screen flex justify-center items-center'>
          <FadeLoader color='#0e4e40' />
      </div>
    )
  }

    
  return ( user &&
    <Layout>
      {showPopup && (
        <TransactionModal 
          isOpen={true} 
          userEmail={user?.email}
          onAccept={handleAccept}
          transaction={invitedTransaction} />
      )}
      <div className=' p-5 md:p-10'>
        {currentStep === 1 && (
          <AddItemForm 
            register={register} 
            handleSubmit={handleSubmit} 
            errors={errors} 
            onSubmit={onSubmit} 
            handleNextStep={handleNextStep} />
        )}
        {currentStep === 2 && (
          <InviteUserForm 
            info={info} 
            setEmail={setEmail} 
            setToPayFee={setToPayFee}
            setCurrentStep={setCurrentStep}
            isSubmitting={isSubmitting}
            fee={fee}
            onStart={onStart} />
        )}
      </div>
    </Layout>
  )
}

export default Start
