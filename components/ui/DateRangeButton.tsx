import { Button, styled } from '@mui/material';
import React from 'react'
import { BiDownload } from 'react-icons/bi'
import { BsCalendar3 } from 'react-icons/bs';

type CalBtnProps = {
    handleCalenderOpen: any;
}
export default function DateRangeButton({ handleCalenderOpen }: CalBtnProps) {
    return (
        <Button
            onClick={handleCalenderOpen}
            sx={{
                bgcolor: '#ED7D31', pl: '12px', pr: '16px', fontSize: '.7rem', py: '11px', letterSpacing: '.1ch', fontFamily: 'Dosis', whiteSpace: 'nowrap', width: '100%', '&:hover': {
                    bgcolor: '#ED7D31', boxShadow: 'none',
                },
            }} component="label" variant="contained" endIcon={<BsCalendar3 size={15} />}>
            Select Date Range
        </Button>
    )
}
