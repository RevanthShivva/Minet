import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../../atoms/iconComponent";
import Iconlabel from "../IconLabel";


interface Props {
  component?: any;
  name?: string;
  dec?: string;
}

const CoinCard = ({ component, name, dec }: Props) => {
  return (
    <div>
      <Stack direction="row">
        <Stack direction="row">
          <Icon component={component}></Icon>
          <Stack direction="column">
            <Typography>{name}</Typography>
            <Typography>{dec}</Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography>Market Cap</Typography>
          <Typography>64.2</Typography>
          </Stack>
          <Stack>
          <Typography>Vol. 24H</Typography>
          <Typography>2.9</Typography>
          </Stack>
          <Stack>
          <Typography>Circulation</Typography>
          <Typography>18.8M BTC</Typography>
          </Stack>
          
         <Iconlabel></Iconlabel>
      </Stack>
    </div>
  );
};

export default CoinCard;
