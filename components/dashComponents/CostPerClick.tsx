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
export default function CostPerClick({ allCampaignStatus, status, setStatus, geoTypes, countries, handleOnChange, selectedRadioValue, setSelectedRadioValue, publisher, setPublisher }: CPCProps) {
    return (
        <>
            <Box component={'div'}>
                <Typography variant='body2'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '1rem',
                    }}>Campaign Information</Typography>
            </Box>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'center' }
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Status</Typography>
                    <NativeSelect options={allCampaignStatus} Placeholder={''} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Name</Typography>
                    <NativeTextInput defaultValue={''} helperText='' placeholder='campaign name for your reference purposes' />
                </Box>
            </Box>
            <Box component={'div'}>
                <Typography variant='body2'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '1rem',
                    }}>Craeative Information</Typography>
            </Box>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'center' }
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Campaign URL</Typography>
                    <NativeTextInput defaultValue={''} helperText='To track our traffic sources and the cost per click on 3rd party platforms, you may use the macroparameter {traffic_id} {publisher_id} and {cost} in your URL. Example: http://example.com/page.php?subid1={traffic_id}&subid2={publisher_id}&cost={cost}' placeholder='url' />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Title</Typography>
                    <NativeTextInput defaultValue={''} helperText='25 characters remaining.
                            These Text Creatives are how your campaign is shown on our traffic channels. For example your campaign might be something like TItle: "FREE $100 Sample Box" Description: "Be this weeks winner, register now!"' placeholder='campaign title' />
                </Box>
            </Box>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'center' }
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Description Line 1</Typography>
                    <NativeTextInput defaultValue={''} helperText='25 characters remaining' placeholder='campaign description' />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Description Line 2</Typography>
                    <NativeTextInput defaultValue={''} helperText='25 characters remaining' placeholder='campaign description' />
                </Box>
            </Box>
            <Button
                sx={{
                    bgcolor: '#383b8c', fontSize: { xs: '.5rem', md: '.7rem' }, px: { xs: '6px', md: '10px' }, py: { xs: '4px', md: '8px' }, letterSpacing: '.1ch', fontFamily: 'Dosis', width: 'fit-content',
                    '&:hover': {
                        bgcolor: '#36a689',
                    }
                }}
                component="label" variant="contained" startIcon={<LuImagePlus />}>
                Upload image
                <VisuallyHiddenInput type="file" />
            </Button>
            <Box component={'div'}>
                <Typography variant='body2'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '1rem',
                    }}>Targeting and Bidding</Typography>
            </Box>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'center' }
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Geo Targeting Type</Typography>
                    <NativeAutoComplete placeholder={''} options={geoTypes} defaultValue={geoTypes[0]} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Country Targeting</Typography>
                    <NativeAutoComplete placeholder={''} options={countries} defaultValue={'United States'} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                <Typography variant='h5' sx={{ fontSize: 14 }}>Device Targeting</Typography>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        columnGap: '10px',
                        color: 'lightgrey',
                    }}>
                    <CheckBoxFilter label={'Desktop'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Android'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'ios'} handleOnChange={handleOnChange} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                <Typography variant='h5' sx={{ fontSize: 14 }}>Run Campaign</Typography>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start'
                    }}>
                    <RadioBtn
                        label='24 hours'
                        value='24-hours'
                        selectedRadioValue={selectedRadioValue}
                        setSelectedRadioValue={setSelectedRadioValue}
                    />
                    <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <RadioBtn
                            label='Time Range'
                            value='time-range'
                            selectedRadioValue={selectedRadioValue}
                            setSelectedRadioValue={setSelectedRadioValue}
                        />
                        {selectedRadioValue === 'time-range' &&
                            <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', rowGap: 1, mt: 1 }}>
                                <TimePicker />
                                <TimePicker />
                            </Box>
                        }
                    </Box>
                </Box>
            </Box>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'center' }
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Max Bid Price (CPC)</Typography>
                    <NativeTextInput defaultValue={'0.00'} helperText='' placeholder='bid amount in $' />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Daily Budget</Typography>
                    <NativeTextInput defaultValue={'10'} helperText='' placeholder='budget amount in $' />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                <Typography variant='h5' sx={{ fontSize: 14 }}>Publishers</Typography>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start'
                    }}>
                    <RadioBtn
                        label='Allow all (Recommended)'
                        value='allow-all'
                        selectedRadioValue={publisher}
                        setSelectedRadioValue={setPublisher}
                    />
                    <RadioBtn
                        label='Allow only'
                        value='allow-only'
                        selectedRadioValue={publisher}
                        setSelectedRadioValue={setPublisher}
                    />
                    <RadioBtn
                        label='Exclude'
                        value='exclude'
                        selectedRadioValue={publisher}
                        setSelectedRadioValue={setPublisher}
                    />
                </Box>
            </Box>
        </>
    )
}
