import { Stack, Typography } from "@mui/material";
import React, { PropsWithRef } from "react";
import Icon from "../../atoms/iconComponent";
import { Icons } from "../../atoms/logo";

interface Props {
  component?: any;
  name?: string;
  dec?: string;
}

const WalletCard = ({ component, name, dec }: Props) => {
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
        <Stack direction="column">
          <Typography>34,000.00</Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default WalletCard;
