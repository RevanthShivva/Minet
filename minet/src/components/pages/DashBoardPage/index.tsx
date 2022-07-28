import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DetailCard from '../../molecules/detailCard'
import Footer from '../../organisms/footer'
import Header from '../../organisms/header'
import MyPortFolio from '../../organisms/MyPortFolio'
import PortFolio from '../../organisms/portfolio'
import SideNav from '../../organisms/sideNav'
import RecentTransactions from '../../organisms/Transactions'
import WalletItem from '../../organisms/WalletItem'
import WatchList from '../../organisms/Watchlist'

const DashBoardPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<any>(); 
  useEffect(() => {
    //get payment data using fetch api
  }, []);

  return (
    <div>
      <Stack direction="row">
        <SideNav></SideNav>
        <Stack direction="column">
          <Header></Header>
          <Stack direction="row">
            <Stack>
              <WatchList />
              {data?.map((eachbook: any, index: number) => {
        return <DetailCard />;
      })}
           <MyPortFolio />
            </Stack>
            <Stack>
              <PortFolio />
              <WalletItem />
              <RecentTransactions />
            </Stack>
          </Stack>
          <Footer />
        </Stack>
      </Stack>
    </div>
  )
}

export default DashBoardPage;