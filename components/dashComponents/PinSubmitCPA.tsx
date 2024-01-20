'use-client'

import React, { useState } from 'react'
import { Box, Button, Card, CardContent, IconButton, MenuItem, Select, SelectChangeEvent, Typography, styled } from '@mui/material';
import NativeTextInput from '@/components/ui/NativeTextInput';
import { LuImagePlus } from 'react-icons/lu';
import CheckBoxFilter from '@/components/ui/CheckBoxFilter';
import RadioBtn from '@/components/ui/RadioBtn';
import TimePicker from '../ui/TimePicker';
import NativeAutoComplete from '../ui/NativeAutoComplete';
import NativeSelect from '../ui/NativeSelect';
import { MdContentCopy } from 'react-icons/md';


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
type AppTrackingMethod = {
    label: string;
    value: string;
    helperText: string;
}
type CPCProps = {
    geoTypes: string[];
    countries: string[];
    handleOnChange(): void;
    selectedRadioValue: string;
    setSelectedRadioValue: React.Dispatch<React.SetStateAction<string>>;
    appTrackingMethod: string;
    setAppTrackingMethod: React.Dispatch<React.SetStateAction<string>>;
    conversionGoals: string[];
    conversionGoal: string;
    setConversionGoal: React.Dispatch<React.SetStateAction<string>>;
    appTrackingMethods: AppTrackingMethod[];
    targetOfferWall: string;
    setTargetOfferWall: React.Dispatch<React.SetStateAction<string>>;
    capPeriods: string[];
    allowProxyTraffic: string;
    setAllowProxyTraffic: React.Dispatch<React.SetStateAction<string>>;
    boostCampaign: string;
    setBoostCampaign: React.Dispatch<React.SetStateAction<string>>;
}
export default function PinSubmitCPA({
    geoTypes,
    countries,
    handleOnChange,
    selectedRadioValue,
    setSelectedRadioValue,
    appTrackingMethod,
    setAppTrackingMethod,
    conversionGoals,
    conversionGoal,
    setConversionGoal,
    appTrackingMethods,
    targetOfferWall,
    setTargetOfferWall,
    capPeriods,
    allowProxyTraffic,
    setAllowProxyTraffic,
    boostCampaign,
    setBoostCampaign,
}: CPCProps) {
    const [linkExa, setLinkExa] = useState('mobile-app-tracking');


    const handleConversionGoalChange = (event: SelectChangeEvent) => {
        setConversionGoal(event.target.value);
    };

    return (
        <form>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
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
                        alignItems: { xs: 'flex-start', sm: 'center' }
                    }}>
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
                            textTransform: 'uppercase',
                            letterSpacing: '.05ch',
                        }}>Craeative Information</Typography>
                </Box>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row' },
                        backgroundColor: '#121622',
                        px: 1,
                        py: 3,
                        borderRadius: 1,
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Title</Typography>
                        <NativeTextInput defaultValue={''} helperText='These Text Creatives are how your campaign is shown on our traffic channels. For example your campaign might be something like Title: "FREE $100 Sample Box" Description: "Be this weeks winner, register now!' placeholder='title for your campaign' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Description Line 1</Typography>
                        <NativeTextInput defaultValue={''} helperText='max 35 characters' placeholder='enter description' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Offer Terms / Rules (Optional)</Typography>
                        <NativeTextInput defaultValue={''} helperText='Special Note to Promoters, examples: "Please aim for a 30% install to signup rate" or "Users must reach level 5"' placeholder='enter text' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Conversion Goal</Typography>
                        <Select
                            fullWidth
                            size='small'
                            placeholder='pick an option'
                            value={conversionGoal}
                            displayEmpty
                            onChange={handleConversionGoalChange}
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                color: 'whitesmoke',
                                fontSize: 12,
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#ED7D31',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#ED7D31',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#ED7D31',
                                },
                                '& .MuiSelect-icon': {
                                    color: 'lightgray',
                                },
                                backgroundColor: '#YourBackgroundColor',
                            }}
                        >
                            <MenuItem
                                sx={{ fontSize: 12 }}
                                value="">
                                <em>{'Pick a convertion goal'}</em>
                            </MenuItem>
                            {
                                conversionGoals.map((option, index) => <MenuItem sx={{ fontSize: 12 }} key={index} value={option}>{option}</MenuItem>)
                            }
                        </Select>
                    </Box>
                </Box>
                {conversionGoal === 'Custom' && <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Enter Conversion Goal</Typography>
                    <NativeTextInput defaultValue={''} helperText='Important: Make it easy for anyone to understand. Avoid using advanced industry vocabulary.' placeholder='enter conversion Goal' />
                </Box>}
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
                            textTransform: 'uppercase',
                            letterSpacing: '.05ch',
                        }}>POSTBACK TRACKING</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Tracking URL</Typography>
                    <NativeTextInput placeholder='' defaultValue={''} helperText="IMPORTANT: Your tracking URL must include our Click Tracking macro as it is required to track conversions:Click Macro={CLICK_ID}. If you want the ability to disable/enable traffic sources, you will need to include the {PUBLISHER_ID} macro to track each publisher ID traffic source. Traffic sources can be managed under 'Sources' / 'CPI/CPA Sources' from the left menu.' placeholder='past tracking link here" />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Add Macros</Typography>
                    <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', gap: .5 }}>
                        <Typography variant='body2' sx={{ fontSize: 12, color: '#36A689' }}>Click ID = {`{CLICK_ID}`} (*Required* for tracking installs)</Typography>
                        <Typography variant='body2' sx={{ fontSize: 12, color: '#36A689' }}>Click ID = {`{CLICK_ID}`} (*Required* for tracking installs)</Typography>
                        <Typography variant='body2' sx={{ fontSize: 12, color: '#36A689' }}>Click ID = {`{CLICK_ID}`} (*Required* for tracking installs)</Typography>
                        <Typography variant='body2' sx={{ fontSize: 12, color: '#36A689' }}>Click ID = {`{CLICK_ID}`} (*Required* for tracking installs)</Typography>
                        <Typography variant='body2' sx={{ fontSize: 12, color: '#36A689' }}>Click ID = {`{CLICK_ID}`} (*Required* for tracking installs)</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: { xs: '100%', sm: 'fit-content' } }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Macro Options</Typography>
                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        <CheckBoxFilter label={'Use filler data if no GAID or IDFA was provided by the source.'} handleOnChange={handleOnChange} />
                        <CheckBoxFilter label={'Randomize {PUBLISHER_ID} sent to tracking link. (You will still see Sources in CPAlead statistics)'} handleOnChange={handleOnChange} />
                    </Box>
                </Box>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%', alignItems: 'flex-start' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Global Postback URL</Typography>
                        <Typography variant='body2' sx={{ backgroundColor: '#121622', px: 1, py: 2, borderRadius: 1, color: '#36A689', fontSize: 12 }}>{`https://net.go2trck.org/aff_lsr?id=e1e0dd84466d3d5e5877be1b23aa2cdb&click_id={YOUR_TRACKING_PLATFORMS_MACRO}`}</Typography>
                        <IconButton size='small' aria-label="copy">
                            <MdContentCopy color='#36A689' />
                        </IconButton>
                        <Typography variant='body2' sx={{ fontSize: 12, color: 'lightgray' }}>You are responsible for copying and pasting the Postback URL above to your 3rd party tracking platform or the Affiliate Network that provided you this offer. If you need help setting up our postback, please contact the Affiliate Network that provided you with this offer or the provider of your tracking platform. Non-converting offers will be removed and you may lose your ability to list CPA or CPI offers. Please be extra sure your postback is setup correctly before you submit your campaign. Click here for a tutorial.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Preview URL</Typography>
                        <NativeTextInput defaultValue={''} helperText={'Optional: Provide a non-geotargeted preview URL.'} placeholder={''} />
                    </Box>
                </Box>
                <Box component={'div'}>
                    <Typography variant='body2'
                        sx={{
                            color: '#ED7D31',
                            fontSize: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '.05ch',
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
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 3,
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Device Targeting</Typography>
                        <Box component={'div'}
                            sx={{
                                display: 'flex',
                                columnGap: '10px',
                                color: 'lightgrey',
                                backgroundColor: '#121622',
                                borderRadius: 1,
                                px: 1,
                                width: 'fit-content',
                            }}>
                            <CheckBoxFilter label={'Desktop'} handleOnChange={handleOnChange} />
                            <CheckBoxFilter label={'Android'} handleOnChange={handleOnChange} />
                            <CheckBoxFilter label={'ios'} handleOnChange={handleOnChange} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Only Target Offerwalls</Typography>
                        <Box component={'div'}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                backgroundColor: '#121622',
                                borderRadius: 1,
                                px: 1,
                                width: 'fit-content',
                            }}>
                            <RadioBtn
                                label='Yes'
                                value='yes'
                                selectedRadioValue={targetOfferWall}
                                setSelectedRadioValue={setTargetOfferWall}
                            />
                            <RadioBtn
                                label='No (Default)'
                                value='no'
                                selectedRadioValue={targetOfferWall}
                                setSelectedRadioValue={setTargetOfferWall}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Affiliate Targeting</Typography>
                        <NativeTextInput defaultValue={''} helperText={'Target a specific list of sub-affiliates, Your campaign will only be available to the list of Affiliate IDs entered above.'} placeholder={''} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Payout(CPA) <em style={{ color: '#ED7D31' }}>$</em></Typography>
                        <NativeTextInput defaultValue={'0.00'} helperText='' placeholder='bid amount in $' />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Run Campaign</Typography>
                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            backgroundColor: '#121622',
                            borderRadius: 1,
                            px: 1,
                            width: 'fit-content',
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
                                <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', rowGap: 1, my: 1 }}>
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
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Cap Period</Typography>
                        <NativeSelect options={capPeriods} Placeholder={'select a cap period'} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Leads Per Period</Typography>
                        <NativeTextInput defaultValue={'25'} helperText='' placeholder='amount in $' />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Boost Campaign ($30 Fee)</Typography>
                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            backgroundColor: '#121622',
                            borderRadius: 1,
                            px: 1,
                            width: 'fit-content',
                        }}>
                        <RadioBtn
                            label='Yes'
                            value='yes'
                            selectedRadioValue={boostCampaign}
                            setSelectedRadioValue={setBoostCampaign}
                        />
                        <RadioBtn
                            label='No'
                            value='no'
                            selectedRadioValue={boostCampaign}
                            setSelectedRadioValue={setBoostCampaign}
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='body2' sx={{ fontSize: 13 }}>{"By submitting this campaign, I, Zubayer Tolon, using IP address 118.179.36.97, agree to CPAlead's Terms of Service and accept all risks associated with advertising on CPAlead. I understand I have FULL control of when my campaign pays for leads, and my postback will only report leads that are not blocked by my campaign's internal quality/compatibility filters. I understand that CPAlead does NOT provide refunds for used balances under any circumstance and it is my duty as a self serve advertiser to manage my budget and traffic compatibility/quality filters. I agree to pay for all leads I report to CPAlead through my postback and these leads are NOT eligible for a refund in ANY circumstance."}
                    </Typography>
                    <Typography variant='body2' sx={{ fontSize: 13 }}>{"You will be charged $5 to submit this campaign. This amount will be refunded to you after you have posted back 5 valid conversions for this campaign. CPAlead does not guarantee that our traffic will convert your campaign. By clicking submit, you acknowledge that you understand this risk"}
                    </Typography>
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
