import { Button } from '@mui/material'
import React from 'react'
import { MdClear } from 'react-icons/md'

export default function ClearAllcheckBtn() {
    return (
        <>
            <Button
                size='small'
                sx={{
                    color: '#ED7D31', bgcolor: '#1c2437', px: '8px', py: '5px', fontSize: '.6rem', letterSpacing: '.1ch', fontFamily: 'Dosis', whiteSpace: 'nowrap',
                    '&:hover': {
                        bgcolor: '#1c2437', boxShadow: 'none',
                    },
                }} component="label" variant="contained" startIcon={<MdClear />}>
                Clear All
            </Button>
        </>
    )
}
