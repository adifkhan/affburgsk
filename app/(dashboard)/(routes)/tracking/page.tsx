'use client'

import React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import NativeTextInput from '@/components/ui/NativeTextInput';
import NativeAutoComplete from '@/components/ui/NativeAutoComplete';

export default function Tracking() {

    return (
        <Box component={'div'}
            sx={{
                display: 'flex',
                flexDirection: "column",
                gap: 1.5,
                color: 'whitesmoke',
            }}>
            <Box component={'div'}>
                <Typography variant='h5'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '1.5rem'
                    }}>Cost Per Click (CPC)</Typography>
            </Box>
            <Box component={'div'}>
                <Typography variant='body2'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '.8rem',
                        mt: 2,
                        borderBottom: '1px solid #ED7D31',
                        py: 1,
                    }}>CPC Option 1: Conversion Pixel</Typography>
                <Typography variant='body2'
                    sx={{
                        color: '',
                        fontSize: '.8rem',
                        mt: 2,
                    }}>{`Using a conversion pixel is OPTIONAL and only works if you have direct access to the HTML of your offer. The conversion pixel should be placed on the "Thank You" page of your offer so you know when the traffic source has successfully interacted with your offer. Conversions will be displayed under the Sources menu.`}</Typography>
            </Box>
            <Card sx={{ backgroundColor: '#1C2437', color: 'whitesmoke', mt: 2 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3, }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>CHOOSE CAMPAIGN, WHICH YOU WANT TO TRACK</Typography>
                    </Box>
                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            gap: 1,
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'flex-start', sm: 'center' }
                        }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                            <Typography variant='h5' sx={{ fontSize: 14 }}>Campaign</Typography>
                            <NativeAutoComplete />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                            <Typography variant='h5' sx={{ fontSize: 14 }}>Set conversion price</Typography>
                            <NativeTextInput defaultValue={''} helperText='' placeholder='per one unique click' />
                        </Box>
                    </Box>
                    <Button
                        size='small'
                        sx={{
                            bgcolor: '#3D30A2', fontSize: '.7rem', px: '12px', py: '6px', letterSpacing: '.1ch', fontFamily: 'Dosis', boxShadow: 'none', width: 'fit-content',
                            '&:hover': {
                                bgcolor: '#3D30A2', boxShadow: 'none',
                            },
                        }} component="label" variant="contained">
                        Get code
                    </Button>
                    <Typography variant='body2' sx={{ fontSize: 12, color: 'lightgray' }}>{'Choose campaign which you want to track and click "Get Code" button.'}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
