import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Coinard from "../../molecules/coinCard";
import CoinCard from "../../molecules/coinCard";
import SearchTime from "../../molecules/SearchTime";
import Footer from "../../organisms/footer";
import Header from "../../organisms/header";
import PaymentCard from "../../organisms/PaymentCard";
import SideNav from "../../organisms/sideNav";

const TradeScreenPage = () => {
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
          <Stack justifyContent="flex-end">
            <SearchTime />
          </Stack>
          <Coinard />
          {data?.map((eachbook: any, index: number) => {
            return <CoinCard />;
          })}
          <Footer />
        </Stack>
      </Stack>
    </div>
  );
};

export default TradeScreenPage;
