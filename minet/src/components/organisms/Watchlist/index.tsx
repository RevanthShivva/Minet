import React from "react";
import { Stack, Typography } from "@mui/material";
import ButtonComponent from "../../atoms/button";
import SideIcon from "../../../assets/images/Avatar.png";
import DiscoveyIcon from "../../../assets/images/avatar1.png";
import NavIcon from "../../../assets/images/avatar2.png";

const WatchList = () => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Stack justifyContent="flex-start" alignItems="flex-start">
          <Typography>Watchlist</Typography>
          <ButtonComponent endIcon={SideIcon}>DiscoveryAssets</ButtonComponent>
        </Stack>
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-end"
        >
          <ButtonComponent endIcon={SideIcon}>Edit</ButtonComponent>
          <ButtonComponent startIcon={DiscoveyIcon}></ButtonComponent>
          <ButtonComponent startIcon={NavIcon}></ButtonComponent>
        </Stack>
      </Stack>
    </div>
  );
};

export default WatchList;
