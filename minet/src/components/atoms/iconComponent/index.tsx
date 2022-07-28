import React from "react";
import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";

interface IconProps extends SvgIconProps {
  component?: any;
}

const SvgIcon = styled(MuiSvgIcon)({
  fill: "none",
});

const Icon = ({ children, ...props }: IconProps) => {
  return <SvgIcon {...props}>{children}</SvgIcon>;
};

export default Icon;
