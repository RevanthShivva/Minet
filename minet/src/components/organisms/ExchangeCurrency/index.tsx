import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../../atoms/button";
import WalletCard from "../../molecules/WalletCard";

const ExchangeCurrency = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    //get tabs data using fetch api
  }, []);

  return (
    <div>
      <Stack>
        <Typography>You are buying</Typography>
        <Typography>0.023</Typography>
        <Typography>1BTC = $3,406,069.54</Typography>
        <Stack>
          {data?.map((eachbook: any, index: number) => {
            return <WalletCard></WalletCard>;
          })}
        </Stack>
        <Typography>0.02356</Typography>
        <Typography>transaction fee</Typography>
        <Typography>Total</Typography>
        <ButtonComponent></ButtonComponent>
      </Stack>
    </div>
  );
};

export default ExchangeCurrency;
