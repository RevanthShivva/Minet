import { Stack, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../../atoms/button";
import TimeLine from "../../atoms/TimeLine";
import GraphFolder from "../../molecules/GraphFolder";
import Iconlabel from "../../molecules/IconLabel";
import NormalCard from "../../molecules/normalCard";

interface Props {
  data?: any;
}
const MyPortFolio = ({ data }: Props) => {
  return (
    <div>
      <Stack direction="row" justifyContent="flex-end">
        <Stack direction="row">
          <NormalCard></NormalCard>
          <NormalCard></NormalCard>
          <Stack direction="row">
            <TimeLine></TimeLine>
            <Iconlabel></Iconlabel>
            <Iconlabel></Iconlabel>
          </Stack>
        </Stack>
        <GraphFolder></GraphFolder>
        <Typography>10 coins</Typography>
        {data?.map((eachbook: any, index: number) => {
          return <ButtonComponent>{eachbook}</ButtonComponent>;
        })}
      </Stack>
    </div>
  );
};

export default MyPortFolio;
