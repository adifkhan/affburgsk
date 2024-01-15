'use client'
import React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import NativeTextInput from '@/components/ui/NativeTextInput';
import DepositTable from '@/components/dashComponents/tables/DepositTable';
import { useAppSelector } from '@/app/GlobalRedux/store';
import Search from '@/components/dashComponents/Search';
import GlobalSearch from '@/components/dashComponents/GlobalSearch';


export default function Deposit() {
    const themeDark = useAppSelector((state) => state.themeReducer.theme);

    return (
        <Box component={'div'}
            sx={{
                display: 'flex',
                flexDirection: "column",
                gap: 1.5
            }}>
            <Box component={'div'}>
                <Typography variant='h5'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '1.5rem'
                    }}>Deposit Funds</Typography>
            </Box>
            <Card sx={{ backgroundColor: '#1C2437', color: 'whitesmoke' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: .5 }}>
                        <Typography variant='h5' sx={{ fontSize: 16 }}>Add funds</Typography>
                        <Typography variant='body2' sx={{ fontSize: 12, color: '#35A387' }}>PayPal, Bitcoin, ACH, and Wire Transfer accepted.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Current Balance: <em style={{ color: '#ED7D31', fontSize: 16 }}>$ {(0).toFixed(2)}</em></Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Deposit Amount (USD)</Typography>
                        <NativeTextInput defaultValue={'250'} helperText='$250 deposit minimum. All refunds are subject to a 25% fee of the remaining balance' placeholder='' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Promo Code</Typography>
                        <NativeTextInput defaultValue={''} helperText='' placeholder='enter your promo code' />
                        <Typography variant='body2' sx={{ fontSize: 12 }}><strong style={{ marginRight: '10px' }}>BONUS20</strong>Receive a $20 bonus when you deposit $1,000.</Typography>
                        <Typography variant='body2' sx={{ fontSize: 12 }}><strong style={{ marginRight: '10px' }}>BONUS20</strong>Receive a $20 bonus when you deposit $1,000.</Typography>
                        <Typography variant='body2' sx={{ fontSize: 12 }}><strong style={{ marginRight: '10px' }}>BONUS20</strong>Receive a $20 bonus when you deposit $1,000.</Typography>
                        <Typography variant='body2' sx={{ fontSize: 12 }}><strong style={{ marginRight: '10px' }}>BONUS20</strong>Receive a $20 bonus when you deposit $1,000.</Typography>
                    </Box>
                    <Button
                        size='small'
                        sx={{
                            bgcolor: '#ED7D31', fontSize: '.7rem', px: '12px', py: '6px', letterSpacing: '.1ch', fontFamily: 'Dosis', boxShadow: 'none', width: 'fit-content',
                            '&:hover': {
                                bgcolor: '#ED7D31', boxShadow: 'none',
                            },
                        }} component="label" variant="contained">
                        Continue
                    </Button>
                </CardContent>
            </Card>
            <Card sx={{ backgroundColor: '#1C2437', color: 'whitesmoke' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: .5 }}>
                        <Typography variant='h5' sx={{ fontSize: 16 }}>Redeem a promo code</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Promo Code</Typography>
                        <NativeTextInput defaultValue={''} helperText='' placeholder='enter your promo code' />
                    </Box>
                    <Button
                        size='small'
                        sx={{
                            bgcolor: '#3D30A2', fontSize: '.7rem', px: '12px', py: '6px', letterSpacing: '.1ch', fontFamily: 'Dosis', boxShadow: 'none', width: 'fit-content',
                            '&:hover': {
                                bgcolor: '#3D30A2', boxShadow: 'none',
                            },
                        }} component="label" variant="contained">
                        Redeem
                    </Button>
                </CardContent>
            </Card>
            <DepositTable />
        </Box>
    )
}
