import { Stack } from '@mui/material';
import React from 'react';
import Search from "../../../assets/images/Avatar.png";
import DropDown from '../DropDown';

const SearchTime = () => {
  return (
    <Stack direction="row">
         <div>
        <img src={Search} alt="SearchLogo" />
      </div>
      <input type="text" placeholder="Search by title or author" />
      <DropDown></DropDown>
      <DropDown></DropDown>
    </Stack>
  )
}

export default SearchTime;