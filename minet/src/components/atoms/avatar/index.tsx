import { Avatar } from "@mui/material";
interface Props {
  image?: any;
}

const Avatars = (props: Props) => {
  return (
    <>
      <Avatar sx={{ bgcolor: "#69A6E3" }}>{props.image}</Avatar>
    </>
  );
};

export default Avatars;
