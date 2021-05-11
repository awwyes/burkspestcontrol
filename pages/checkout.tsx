import React, { useState } from 'react'
import NavBar from '../components/NavBarLayout/NavBar'
import PaymentPage from '../components/SquarePaymentFormLayout/PaymentPage'

export default function CheckOutPage() {
  return (
    <>
      <NavBar />
      <PaymentPage />
    </>
  );
}