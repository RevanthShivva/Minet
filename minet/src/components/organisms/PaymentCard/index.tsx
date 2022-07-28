import { Stack, Typography } from '@mui/material';
import ButtonComponent from '../../atoms/button';
import Icon from '../../atoms/iconComponent';
import Right from "../../../assets/images/Avatar.png";

const PaymentCard = () => {
  return (
    <div>
      <Stack>
        <Icon component={Right}>
        </Icon>
        <Typography>0.0234510 BTC</Typography>
        <Typography>Purchase is completed, please check your
balance in your crypto wallet</Typography>
        <Stack direction="row">
          <ButtonComponent>Buy Crypto</ButtonComponent>
          <ButtonComponent>GO TO USD COIN</ButtonComponent>
        </Stack>
      </Stack>
    </div>
  )
}

export default PaymentCard;
