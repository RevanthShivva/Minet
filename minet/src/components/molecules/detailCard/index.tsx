import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../../atoms/iconComponent";
import GraphFolder from "../GraphFolder";

interface Props {
  component?: any;
  name?: string;
  dec?: string;
  time?: string;
}

const DetailCard = ({ component, name, dec, time }: Props) => {
  return (
    <div>
      <Stack direction="row">
        <Stack direction="row">
          <Icon component={component}></Icon>
          <Stack direction="column">
            <Typography>{name}</Typography>
            <Typography>{dec}</Typography>
            <Typography>{time}</Typography>
          </Stack>
        </Stack>
        <Stack direction="column">
          <GraphFolder></GraphFolder>
        </Stack>
      </Stack>
    </div>
  );
};

export default DetailCard;