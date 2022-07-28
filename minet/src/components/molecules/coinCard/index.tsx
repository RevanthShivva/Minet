import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../../atoms/iconComponent";
import { Icons } from "../../atoms/logo";


interface Props {
  component?: any;
  name?: string;
  dec?: string;
}

const Coinard = ({ component, name, dec }: Props) => {
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
        
          <Typography>3,285,553.73</Typography>
          <Typography>+1.06</Typography>
          <Typography>+60.1T</Typography>
          <Icon component={component}></Icon>

      </Stack>
    </div>
  );
};

export default Coinard;
