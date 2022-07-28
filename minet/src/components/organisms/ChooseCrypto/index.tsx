import { Stack, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import CheckOutCard from '../../molecules/CheckOutCard';

const ChooseCrypto = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    //get data using fetch api
  }, []);
  return (
    <div>
      <Stack>
        <Typography>Choose crypto</Typography>
        {data?.map((eachbook: any, index: number) => {
        return <CheckOutCard ></CheckOutCard>;
      })}
      </Stack>
    </div>
  )
}

export default ChooseCrypto;