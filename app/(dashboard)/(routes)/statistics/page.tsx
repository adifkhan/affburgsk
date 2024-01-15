'use client'
import React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import DepositTable from '@/components/dashComponents/tables/DepositTable';
import { useAppSelector } from '@/app/GlobalRedux/store';


export default function Statistics() {
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
                    }}>Statistics</Typography>
            </Box>
            <Card sx={{ backgroundColor: '#1C2437', color: 'whitesmoke' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: .5 }}>
                        <Typography variant='h5' sx={{ fontSize: 16 }}>Search Statistics</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Date range</Typography>
                    </Box>
                    <Button
                        size='small'
                        sx={{
                            bgcolor: '#ED7D31', fontSize: '.7rem', px: '12px', py: '6px', letterSpacing: '.1ch', fontFamily: 'Dosis', boxShadow: 'none', width: 'fit-content',
                            '&:hover': {
                                bgcolor: '#ED7D31', boxShadow: 'none',
                            },
                        }} component="label" variant="contained">
                        Submit
                    </Button>
                </CardContent>
            </Card>
            <DepositTable />
        </Box>
    )
}
