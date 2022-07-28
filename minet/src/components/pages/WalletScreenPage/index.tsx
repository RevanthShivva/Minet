import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import TotalBalance from "../../molecules/BalanceCard";
import CoinCard from "../../molecules/coinCard";
import SearchTime from "../../molecules/SearchTime";
import WalletCard from "../../molecules/WalletCard";
import Footer from "../../organisms/footer";
import Header from "../../organisms/header";
import PaymentCard from "../../organisms/PaymentCard";
import SideNav from "../../organisms/sideNav";
import SecondaryTabs from "../../organisms/Tabs";

const WalletScreenPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<any>();
  useEffect(() => {
    //get Tab data using fetch api
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
            <TotalBalance />
            <Stack alignContent="flex-end">
              <SearchTime />
            </Stack>
            {data?.map((eachbook: any, index: number) => {
              return <WalletCard />;
            })}
          </Stack>
          <Footer />
        </Stack>
      </Stack>
    </div>
  );
};

export default WalletScreenPage;
