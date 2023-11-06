import React, { Dispatch, SetStateAction, useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import styles from '@/styles/Dashboard/DateRangePickerComp.module.css';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { dateType } from '@/types/models';

type CalenderProps = {
  rangeDate: object;
  setRangeDate: Dispatch<SetStateAction<dateType>>;
  handleChange: any;
}
export default function DateRangePickerComp({ rangeDate, setRangeDate, handleChange }: CalenderProps) {

  return (
    <div className={styles.date_range_parent}>
      <DateRangePicker
        className={styles.date_range}
        ranges={[rangeDate]}
        maxDate={new Date()}
        onChange={handleChange} />
    </div>
  )
}
