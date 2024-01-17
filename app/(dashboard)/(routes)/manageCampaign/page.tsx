'use client'

import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'


export default function ManageCampaign() {
    const router = useRouter();

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
                    }}>Manage Campaign</Typography>
            </Box>
            <Card sx={{ backgroundColor: '#1C2437', color: 'whitesmoke', mt: 2 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography variant='h5' sx={{ fontSize: 16 }}>No Campaign</Typography>
                        <Typography variant='h5' sx={{ fontSize: 12 }}>You do not have any campaigns setup.</Typography>
                        <Button
                            onClick={() => router.push('/createNewCampaign')}
                            size='small'
                            sx={{
                                bgcolor: '#ED7D31', fontSize: '.8rem', px: '12px', py: '6px', letterSpacing: '.1ch', fontFamily: 'Dosis', boxShadow: 'none', width: 'fit-content',
                                '&:hover': {
                                    bgcolor: '#ED7D31', boxShadow: 'none',
                                },
                            }} component="label" variant="contained">
                            Create Campaign
                        </Button>
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{
                backgroundColor: '#1C2437', mt: 2, color: '#36A689'
            }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, }}>
                    <em style={{ fontWeight: 600 }}>Notice:</em>
                    <Typography variant='body2' sx={{ fontSize: 12 }}>{"The Affiliate Marketing industry is VERY competitive. If you choose to disclose to an affiliate network that you are sending CPAlead's traffic to their campaigns, they may block your account with a fake reason and keep the money you earned. Please ask the network that provided you with your campaigns for feedback on the traffic/leads you receive from CPAlead, preferably every 24 hours to avoid a loss. There have been multiple instances where affiliate networks are happy with the traffic they are receiving however they will ban your account as soon as they are told the traffic is coming from CPAlead (their competitor). It is the perfect opportunity for them to make a competitor look bad (us) while stealing your money. We have taken multiple steps to obscure our tracking links to avoid networks banning your account for this reason."}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}