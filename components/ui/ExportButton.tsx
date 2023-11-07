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
            bgcolor: '#383b8c', fontSize: '.6rem', px: '10px', py: '6px', letterSpacing: '.1ch', fontFamily: 'Dosis', '&:hover': {
                bgcolor: '#36a689',

            }
        }} component="label" variant="contained" startIcon={<BiDownload />}>
            Download Report
            <VisuallyHiddenInput type="file" />
        </Button>
    )
}
