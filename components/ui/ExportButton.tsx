import { Button, styled } from '@mui/material';
import React from 'react'
import { BiDownload } from 'react-icons/bi'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
export default function ExportButton() {
    return (
        <Button sx={{
            bgcolor: '#383b8c', fontSize: { xs: '.5rem', md: '.6rem' }, px: { xs: '6px', md: '10px' }, py: { xs: '4px', md: '8px' }, letterSpacing: '.1ch', fontFamily: 'Dosis', '&:hover': {
                bgcolor: '#36a689',

            }
        }} component="label" variant="contained" startIcon={<BiDownload size={'1rem'} />}>
            Download Report
            <VisuallyHiddenInput type="file" />
        </Button>
    )
}
