import { Button, styled } from '@mui/material';
import React from 'react'
import { BiDownload } from 'react-icons/bi'
import { BsCalendar3 } from 'react-icons/bs';

type CalBtnProps = {
    handleCalenderOpen: () => void;
}
export default function DateRangeButton({ handleCalenderOpen }: CalBtnProps) {
    return (
        <Button
            onClick={handleCalenderOpen}
            sx={{
                bgcolor: '#ED7D31', pl: '8px', pr: '12px', fontSize: '.7rem', py: '5px', letterSpacing: '.1ch', fontFamily: 'Dosis', height: '100%', whiteSpace: 'nowrap',
                '&:hover': {
                    bgcolor: '#ED7D31', boxShadow: 'none',
                },
            }} component="label" variant="contained" endIcon={<BsCalendar3 size={15} />}>
            Select Date Range
        </Button>
    )
}
