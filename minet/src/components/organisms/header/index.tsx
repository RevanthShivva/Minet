import { Stack, Typography } from '@mui/material'
import React from 'react'
import Avatars from '../../atoms/avatar'
import ButtonComponent from '../../atoms/button'
import image from "../../../assets/images/person.png"

const Header = () => {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" >
        <Typography>Dashboard</Typography>
        <Stack direction="row" alignItems="flex-start" justifyContent="flex-end">
        <ButtonComponent>Sell</ButtonComponent>
        <ButtonComponent>Buy</ButtonComponent>
        <Avatars image={image}></Avatars>
      </Stack>
      </Stack>
    </div>
  )
}

export default Header;