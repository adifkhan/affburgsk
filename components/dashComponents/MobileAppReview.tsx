'use-client'

import React from 'react'
import { Box, Button, Typography, styled } from '@mui/material';
import NativeTextInput from '@/components/ui/NativeTextInput';
import NativeSelect from '@/components/ui/NativeSelect';
import { LuImagePlus } from 'react-icons/lu';
import NativeAutoComplete from '@/components/ui/NativeAutoComplete';
import CheckBoxFilter from '@/components/ui/CheckBoxFilter';
import RadioBtn from '@/components/ui/RadioBtn';
import TimePicker from '@/components/ui/TimePicker';


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

type CPCProps = {
    allCampaignStatus: string[];
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    geoTypes: string[];
    countries: string[];
    handleOnChange(): void;
    selectedRadioValue: string;
    setSelectedRadioValue: React.Dispatch<React.SetStateAction<string>>;
    publisher: string;
    setPublisher: React.Dispatch<React.SetStateAction<string>>;
}
export default function MobileAppReview({ allCampaignStatus, status, setStatus, geoTypes, countries, handleOnChange, selectedRadioValue, setSelectedRadioValue, publisher, setPublisher }: CPCProps) {
    return (
        <form>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
                <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', gap: 1, backgroundColor: '#121622', borderRadius: 1, p: 1, borderLeft: '4px solid #ED7D31' }}>
                    <Typography variant='body2' sx={{ color: '#ED7D31', fontSize: '1rem', mb: 1 }}>Cost Per Review</Typography>
                    <Typography variant='body2' sx={{ color: 'whiteSmoke', fontSize: 13, }}>Get reviews for your App, Website, Service, or Product. Our users will test/try your item according to your instructions and leave you a review shortly after on the website of your choice. After a certain number of days go by (set by you), CPAlead staff will manually check to see if the review left by the user still appears and will make sure the review followed your instructions. If all criteria is met, CPAlead will reward the user.</Typography>
                    <Typography variant='body2' sx={{ color: 'whiteSmoke', fontSize: 13, }}>CPAlead is required to credit the user based on their genuine experience, whether the review was good or bad. However, based on previous history, over 90% of the reviews left by our users tend to be very positive.</Typography>
                </Box>
                <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', gap: 1, backgroundColor: '#121622', borderRadius: 1, p: 1, borderLeft: '4px solid #ED7D31' }}>
                    <Typography variant='body2' sx={{ color: '#ED7D31', fontSize: '1rem', mb: 1 }}>How You Can Benefit</Typography>
                    <Typography variant='body2' sx={{ color: 'whiteSmoke', fontSize: 13, }}>Social Proof - Visitors will see other people are using your App, Website, Service or Product.</Typography>
                    <Typography variant='body2' sx={{ color: 'whiteSmoke', fontSize: 13, }}>{"App Store Optimization - The more reviews you have on your app, the better you will likely rank in the app store for your app's keywords."}</Typography>
                    <Typography variant='body2' sx={{ color: 'whiteSmoke', fontSize: 13, }}>{"Search Engine Optimization - Google and other search engines take into account your rating on review sites when deciding where to place you in search results for your keywords."}</Typography>
                    <Typography variant='body2' sx={{ color: 'whiteSmoke', fontSize: 13, }}>{"Common Review Sites - Google Business, Google Play Store, Apple App Store, Facebook Business, Industry Specific Review Sites, and more."}</Typography>
                </Box>
                <Box component={'div'}>
                    <Typography variant='body2'
                        sx={{
                            color: '#ED7D31',
                            fontSize: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '.05ch',
                        }}>Campaign Information</Typography>
                </Box>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Name</Typography>
                        <NativeTextInput defaultValue={''} helperText='' placeholder='campaign name for your reference purposes' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Title</Typography>
                        <NativeTextInput defaultValue={''} helperText='' placeholder='Enter a short title for your review. For example: Review CPMPANYNAME' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Instruction Text</Typography>
                        <NativeTextInput defaultValue={''} helperText='Give user instructions on how to complete your review, for example "Google search for COMPANYNAME TrustPilot, click on the Trustpilot link for COMPANYNAME, visit provided URL and leave a review", or "Search for APPNAME on Google Play, visit provided URL and leave a review after installing application"' placeholder='Enter instructions' />
                    </Box>
                </Box>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>URL for Review Page</Typography>
                        <NativeTextInput defaultValue={''} helperText='' placeholder='' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Days Until Reward</Typography>
                        <NativeTextInput defaultValue={'3'} helperText='' placeholder='' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Cost Per Review ( <em style={{ color: '#ED7D31' }}>$</em> )</Typography>
                        <NativeTextInput defaultValue={'2.00'} helperText='Minimum Bid CPR $2.00' placeholder='' />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, }}>
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
                    <Button
                        size='small'
                        sx={{
                            fontSize: '.7rem', px: '12px', py: '6px', letterSpacing: '.1ch', fontFamily: 'Dosis', boxShadow: 'none', width: 'fit-content', border: '1px solid #ED7D31', color: 'whiteSmoke',
                            '&:hover': {
                                boxShadow: 'none',
                                border: '1px solid #ED7D31',
                            },
                        }} variant="outlined">
                        Cancel
                    </Button>
                </Box>
            </Box>
        </form>
    )
}
