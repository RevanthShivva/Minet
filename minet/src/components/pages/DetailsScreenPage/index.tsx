import { Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CoinCard from '../../molecules/coinCard'
import Footer from '../../organisms/footer'
import Header from '../../organisms/header'
import MyPortFolio from '../../organisms/MyPortFolio'
import SideNav from '../../organisms/sideNav'
import SecondaryTabs from '../../organisms/Tabs'
import RecentTransactions from '../../organisms/Transactions'

const DetailScreenPage = () => {
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
          <Stack>
            <CoinCard />
            <SecondaryTabs data={data} />
            <MyPortFolio />
            </Stack>
            <Stack direction="column">
              <Stack>
                <Typography></Typography>
                <Typography></Typography>
                <Typography></Typography>
              </Stack>
              <Stack>
                <RecentTransactions></RecentTransactions>
              </Stack>

            </Stack>
          <Footer />
        </Stack>
      </Stack>
    </div>
  )
}

export default DetailScreenPage;