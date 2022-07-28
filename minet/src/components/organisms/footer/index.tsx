import React from "react";
import { Stack, Typography } from "@mui/material";
import ButtonComponent from "../../atoms/button";
import DropDown from "../../molecules/DropDown";

const Footer = () => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Typography>Dashboard</Typography>
        <Typography>Carrers</Typography>
        <Typography>Legal & Privacy</Typography>
        <Typography>2021 Minet</Typography>
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-end"
        >
          <DropDown></DropDown>
          <ButtonComponent>Need Help</ButtonComponent>
        </Stack>
      </Stack>
    </div>
  );
};

export default Footer;
