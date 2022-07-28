import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NormalCard from "../../molecules/normalCard";
import WalletCard from "../../molecules/WalletCard";
import ChooseCrypto from "../../organisms/ChooseCrypto";
import ExchangeCurrency from "../../organisms/ExchangeCurrency";
import Footer from "../../organisms/footer";
import Header from "../../organisms/header";
import SideNav from "../../organisms/sideNav";

const PurchaseScreenPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState();
  useEffect(() => {
    //get crypto cards data using fetch api
  }, []);

  return (
    <div>
      <Stack direction="row">
        <SideNav></SideNav>
        <Stack direction="column">
          <Header></Header>
          <Stack direction="row">
            <Stack>
              <Typography>Buy Crypto</Typography>
              <ChooseCrypto />
              <Stack>
                <Typography>Payment Method</Typography>
                <WalletCard></WalletCard>
              </Stack>
              <Stack>
                <Typography>Amount Details</Typography>
                <NormalCard></NormalCard>
                <NormalCard></NormalCard>
              </Stack>
              <Stack>
                <Typography>Select Speed Delivery</Typography>
                <WalletCard></WalletCard>
              </Stack>
            </Stack>
            <Footer />
          </Stack>
          <ExchangeCurrency />
        </Stack>
      </Stack>
    </div>
  );
};

export default PurchaseScreenPage;
