import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../../atoms/iconComponent'

interface Props{
  name?: string;
  icon1?: any;
  percent?: string;
}

const NormalCard = ({name, icon1, percent}: Props) => {
  return (
    <div>
      <Stack direction="column">
        <Stack direction="row">
           <Typography>{name}</Typography>
           <Icon component={icon1}></Icon>
           <Typography>{percent}</Typography>
        </Stack>
        <Typography></Typography>
      </Stack>
    </div>
  )
}

export default NormalCard;