import React from "react";
import { Stack, Typography } from "@mui/material";

interface Props {
  component?: any;
  name?: string;
  dec?: string;
}

const CoinCard = ({ component, name, dec }: Props) => {
  return (
    <div>
      <Stack direction="row">
        <Typography>Name</Typography>
        <Typography>Price</Typography>
        <Typography>Change</Typography>
        <Typography>Market Cap</Typography>
        <Typography>Watch</Typography>
      </Stack>
    </div>
  );
};

export default CoinCard;
