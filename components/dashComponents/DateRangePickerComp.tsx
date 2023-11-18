import React, { Dispatch, SetStateAction, useState } from 'react'
import { DateRangePicker } from 'react-date-range'

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { dateType } from '@/types/models';
import { Box } from '@mui/material';

type CalenderProps = {
  rangeDate: object;
  setRangeDate: Dispatch<SetStateAction<dateType>>;
  handleChange: any;
}
export default function DateRangePickerComp({ rangeDate, setRangeDate, handleChange }: CalenderProps) {

  return (
    <Box component={'div'}
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        flex: '1 1 0px',
      }}>
      <DateRangePicker
        ranges={[rangeDate]}
        maxDate={new Date()}
        onChange={handleChange} />
    </Box>
  )
}
