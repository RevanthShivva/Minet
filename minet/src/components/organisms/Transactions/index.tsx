import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../../atoms/button";
import CoinCard from "../../molecules/coinCard";

type cardType = {
  cardName: string;
  des: string;
};
const RecentTransactions = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<any>();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    //get catds data using fetch api
  }, []);

  return (
    <div>
      <Stack>
        <Stack justifyContent="space-between" alignItems="flex-start">
          <Typography>Recent Transactions</Typography>
          <ButtonComponent>View All</ButtonComponent>
        </Stack>
        <Typography>Date</Typography>
        {data?.map((eachcard: cardType, index: number) => {
          return <CoinCard></CoinCard>;
        })}
      </Stack>
    </div>
  );
};

export default RecentTransactions;
