import { Button } from '@mui/material';
import React from 'react'
import { IoFilterSharp } from 'react-icons/io5';


export default function FilterButton() {
    return (
        <Button
            sx={{
                bgcolor: '#ED7D31', fontSize: '.7rem', px: '12px', py: '6px', letterSpacing: '.1ch', fontFamily: 'Dosis',
                '&:hover': {
                    bgcolor: '#ED7D31', boxShadow: 'none',
                },
            }} component="label" variant="contained" startIcon={<IoFilterSharp size={15} />}>
            Apply Filter
        </Button>
    )
}
