import React from 'react'
import { Button } from '@mui/material';
import { TbFilterStar } from 'react-icons/tb';

export default function AdvancedFilterBtn() {
    return (
        <>
            <Button
                size='small'
                sx={{
                    bgcolor: '#1450A3', px: '8px', py: '6px', fontSize: '.7rem', letterSpacing: '.1ch', fontFamily: 'Dosis', whiteSpace: 'nowrap',
                    '&:hover': {
                        bgcolor: '#0C356A', boxShadow: 'none',
                    },
                }} component="label" variant="contained" startIcon={<TbFilterStar size={15} />}>
                Advance Filter
            </Button>
        </>
    )
}
