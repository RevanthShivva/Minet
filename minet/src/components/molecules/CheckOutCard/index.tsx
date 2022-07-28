import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../../atoms/iconComponent";
interface Props {
  coinName?: string;
  value?: string;
}
const CheckOutCard = ({ coinName, value }: Props) => {
  return (
    <div>
      <Stack>
        <Icon></Icon>
        <Typography>{coinName}</Typography>
        <Typography>{value}</Typography>
      </Stack>
    </div>
  );
};

export default CheckOutCard;
