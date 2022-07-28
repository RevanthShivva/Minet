import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../../atoms/button";
import Icon from "../../atoms/iconComponent";
import CoinCard from "../../molecules/coinCard";
import SideIcon from "../../../assets/images/Avatar.png";
import DiscoveyIcon from "../../../assets/images/avatar1.png";
import WalletCard from "../../molecules/WalletCard";

type cardType = {
  cardName: string;
  des: string;
};
const WalletItem = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<cardType>();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    //get catds data using fetch api
  }, []);

  return (
    <div>
      <Stack>
        <Stack justifyContent="space-between" alignItems="flex-start">
          <Typography>My Portfolio</Typography>
          <Icon component={SideIcon}></Icon>
          <ButtonComponent startIcon={DiscoveyIcon}></ButtonComponent>
        </Stack>
        {data?.map((eachcard: cardType, index: number) => {
          return <WalletCard></WalletCard>;
        })}
      </Stack>
    </div>
  );
};

export default WalletItem;
