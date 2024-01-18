'use client'

import { Box, Typography, keyframes } from '@mui/material'
import React from 'react'
import { SiIcon } from 'react-icons/si'


const rotate = keyframes({
    from: {
        transform: 'rotate(0)'
    },
    to: {
        transform: 'rotate(360deg)'
    }
})

export default function LoadingComp() {

    return (
        <Box component={'div'}
            sx={{
                width: '100%',
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // backdropFilter: 'brightness(80%)'
            }}>
            <Box component={'span'}
                sx={{
                    animation: `${rotate} 2s linear 1s infinite normal forwards`,
                    color: '#ED7D31',
                    fontSize: 60,
                    height: 100,
                    width: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <SiIcon />
            </Box>
            <Typography sx={{ color: '#ED7D31' }}>Loading...</Typography>
        </Box>
    )
}