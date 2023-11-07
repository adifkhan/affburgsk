import { Button } from '@mui/material'
import React from 'react'
import { BiSelectMultiple } from 'react-icons/bi'
import { MdClear } from 'react-icons/md'

export default function SelectAllCheckBtn() {
    return (
        <>
            <Button
                size='small'
                sx={{
                    color: '#ED7D31', bgcolor: '#1c2437', px: '8px', py: '5px', fontSize: '.6rem', letterSpacing: '.1ch', fontFamily: 'Dosis', whiteSpace: 'nowrap',
                    '&:hover': {
                        bgcolor: '#1c2437', boxShadow: 'none',
                    },
                }} component="label" variant="contained" startIcon={<BiSelectMultiple />}>
                Select All
            </Button>
        </>
    )
}
