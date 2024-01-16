'use client'

import React from 'react'
import { Box, Typography } from '@mui/material';

export default function Tracking() {

    return (
        <Box
            component={'div'}
            sx={{
                display: 'flex',
                flexDirection: "column",
                gap: 1.5,
                position: 'relative',
                height: '100%',
                width: '100%',
            }}>
            <Box component={'div'}>
                <Typography variant='h5'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '1.5rem'
                    }}>Cost Per Click (CPC)</Typography>
            </Box>
        </Box>
    )
}
