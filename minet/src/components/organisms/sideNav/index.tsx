import React from 'react';
import { Stack } from '@mui/material';
import { Icons } from '../../atoms/logo';
import logo from '../../../assets/images/person.png'
import ButtonComponent from '../../atoms/button';
import  Avatar from '../../../assets/images/Avatar.png';
import LogoutIcon from '../../../assets/images/avatar1.png';
import NotificationIcon from '../../../assets/images/avatar2.png';
const SideNav = () => {
  return (
    <div>
      <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" >
        <Icons source={logo}></Icons>
        <ButtonComponent startIcon={Avatar}></ButtonComponent>
        <ButtonComponent startIcon={Avatar}></ButtonComponent>
        <ButtonComponent startIcon={Avatar}></ButtonComponent>
        <ButtonComponent startIcon={NotificationIcon}></ButtonComponent>
        <ButtonComponent startIcon={LogoutIcon}></ButtonComponent>
      </Stack>
    
    </div>
  )
}

export default SideNav;