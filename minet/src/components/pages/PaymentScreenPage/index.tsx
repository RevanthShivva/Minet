import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../../organisms/footer'
import Header from '../../organisms/header'
import PaymentCard from '../../organisms/PaymentCard'
import SideNav from '../../organisms/sideNav'

const PaymenScreenPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(); 
  useEffect(() => {
    //get payment data using fetch api
  }, []);

  return (
    <div>
      <Stack direction="row">
        <SideNav></SideNav>
        <Stack direction="column">
          <Header></Header>
          <PaymentCard></PaymentCard>
          <Footer />
        </Stack>
      </Stack>
    </div>
  )
}

export default PaymenScreenPage;