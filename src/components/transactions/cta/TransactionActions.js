import React from 'react'
import MakePayment from './MakePayment';
import DeliveryStatus from './DeliveryStatus';
import CompleteTransaction from './CompleteTransaction';
import PaymentStatus from './PaymentStatus';
import DeliveryCTA from './DeliveryCTA';
import TransactionSummary from './TransactionSummary';
import { useFlutterwave } from 'flutterwave-react-v3';
import { URL } from '@/requestMethods';
import { useSelector } from 'react-redux';
import { handleConfirmComplete, handleConfirmDeliver, handleDeliver, initiateTransfer } from '@/redux/apiCalls';
import ShippedStatus from './Shipped';
import ConfirmDelivery from './ConfirmDelivery';
import TransactionCompleted from './TransactionCompleted';
import AwaitingTransactionComplete from './AwaitingTransactionComplete';
import { useRouter } from 'next/navigation';
// const Flutterwave = require('flutterwave-node-v3');
// const flw = new Flutterwave("FLWPUBK_TEST-3d57a275d12cc017fc463fd1b36e2a0b-X", "FLWSECK-39cc7683d231c4d18890ab199cb67f1d-18cf9942a62vt-X");

const TransactionActions = ({ userRole, transactionStatus, transaction }) => {

    const userDetails = useSelector(state => state.user.info)
    const router = useRouter()

    const amount = userRole === 'buyer' && transaction.toPayFee === 'buyer'
        ? transaction.item.price + transaction.fee
        : transaction.item.price;


    const sellerAccountStatus = transaction?.seller?.bankDetails? true:false 

    // console.log(sellerAccountStatus)

    const config = {
        public_key: "FLWPUBK-59d89542e1f64ffd9f40b75a01ec8950-X",
        tx_ref: Date.now(),
        amount: amount,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        redirect_url: `${URL}/transactions/${transaction?.tid}`,
        meta: {
          userId: userDetails?._id,
          id: transaction?._id
        },
        customer: {
          email: userDetails?.email,
          name: userDetails?.fullName,
          
        },
        customizations: {
          title: `Payment for ${transaction?.title}`,
          description: `wallet funding`,
          logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
        },
      };
    
      const handleFlutterPayment = useFlutterwave(config)

      // console.log(userDetails)

      // console.log(Date.now())





      const handleTransfer = async () => {
        const transferData = {
          bankCode: userDetails?.bankDetails?.bankCode, // Example for Access Bank
          accountNumber: userDetails?.bankDetails?.accountNumber,
          amount: transaction?.item?.price,
          userId: transaction?.seller?._id,
          tid: transaction?._id
        };
    
        try {
            const result = await initiateTransfer(transferData);
            console.log("Transfer result:", result);
            // Handle success notification, UI updates, etc.
        } catch (error) {
            console.error("Transfer error:", error);
            // Handle error notification, UI updates, etc.
        }
      };
    
    
      const handlePay = ()=> {
        handleFlutterPayment({
          callback: (res) => {
            router.refresh()
            // console.log(res)
          }
        })
      }

      const onDeliver = async ()=> {
        try {
            const res = await handleDeliver(userDetails?._id, transaction?.tid )
            router.refresh()
            console.log(res)
        } catch (error) {
            console.log(error)
        }
      }


      const handleConfirmDelivery = async () => {
        try {
          // Call API to update transaction status to 'delivered'
          await handleConfirmDeliver(userDetails?._id, transaction?.tid);
          router.refresh()
          // Handle any additional UI changes, notifications, etc.
        } catch (error) {
          console.error("Error confirming delivery:", error);
        }
      };



      const handleComplete = async () => {
        try {
          // Call API to update transaction status to 'delivered'
          await handleConfirmComplete(userDetails?._id, transaction?.tid);
          await handleTransfer()
          router.refresh()
          // Handle any additional UI changes, notifications, etc.
        } catch (error) {
          console.error("Error confirming delivery:", error);
        }
      };



    if (userRole === 'buyer') {
        if (transactionStatus === 'pending') return <MakePayment handlePay={handlePay} />;
        if (transactionStatus === 'processing') return <DeliveryStatus />;
        if (transactionStatus === 'shipped') return <ConfirmDelivery onConfirmDelivery={handleConfirmDelivery} />;
        if (transactionStatus === 'delivered') return <CompleteTransaction onComplete={handleComplete} sellerAccountStatus={sellerAccountStatus} />;
        if (transactionStatus === 'completed') return <TransactionCompleted />;
    }

    if (userRole === 'seller') {
        if (transactionStatus === 'pending') return <PaymentStatus />;
        if (transactionStatus === 'processing') return <DeliveryCTA onDeliver={onDeliver} />;
        if (transactionStatus === 'shipped') return <ShippedStatus />;
        if (transactionStatus === 'delivered') return <AwaitingTransactionComplete />;
        if (transactionStatus === 'completed') return <TransactionCompleted />;
    }

    // Default return in case no match
    return null;
}

export default TransactionActions
