'use-client'

import React, { useState } from 'react'
import { Box, Button, Card, CardContent, MenuItem, Select, SelectChangeEvent, Typography, styled } from '@mui/material';
import NativeTextInput from '@/components/ui/NativeTextInput';
import { LuImagePlus } from 'react-icons/lu';
import CheckBoxFilter from '@/components/ui/CheckBoxFilter';
import RadioBtn from '@/components/ui/RadioBtn';
import TimePicker from '../ui/TimePicker';
import NativeAutoComplete from '../ui/NativeAutoComplete';
import NativeSelect from '../ui/NativeSelect';


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
export default function MobileAppInstall({
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
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Play Store or iTunes URL(Optional)</Typography>
                        <NativeTextInput defaultValue={''} helperText='Automatically retrieve creative details, paste link to your App on Google Play or iTunes, example: https://play.google.com/store/apps/details?id=com.your.appor https://itunes.apple.com/app/id389801252' placeholder='url' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Title</Typography>
                        <NativeTextInput defaultValue={''} helperText='25 characters remaining.
                            These Text Creatives are how your campaign is shown on our traffic channels. For example your campaign might be something like TItle: "FREE $100 Sample Box" Description: "Be this weeks winner, register now!"' placeholder='campaign title' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Description Line 1</Typography>
                        <NativeTextInput defaultValue={''} helperText='25 characters remaining' placeholder='campaign description' />
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
                        }}>App Install Tracking & Attribution</Typography>
                </Box>
                <Card sx={{
                    backgroundColor: '#121622',
                    color: '#36A689',
                    fontSize: 12,
                }}>
                    <CardContent>
                        <Typography variant='body2' sx={{ fontSize: 12 }}>If your CPI offer does NOT resolve to the Google Play or iTunes Store as the final destination, it will be removed. If this is a mobile survey or pin submit, please add as a CPA offer instead</Typography>
                    </CardContent>
                </Card>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Tracking Method</Typography>
                    <Box
                        component={'div'}
                        sx={{
                            display: 'flex',
                            mt: 1.5,
                            flexDirection: { xs: 'column', sm: 'row' },
                            backgroundColor: '#121622',
                            borderRadius: 1,
                            p: 1,
                        }}>
                        {
                            appTrackingMethods.map((method: AppTrackingMethod, index: number) => <RadioBtn
                                key={index}
                                label={method.label}
                                value={method.value}
                                selectedRadioValue={appTrackingMethod}
                                setSelectedRadioValue={setAppTrackingMethod}
                            />)
                        }
                    </Box>
                    {appTrackingMethod === 'other-3rd-party' && <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, width: '100%', mt: 1 }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Global Postback URL</Typography>
                        <Typography
                            variant='body2'
                            sx={{ fontSize: 14, color: '#36A689', px: 1, py: 2, borderRadius: 1, backgroundColor: '#121622' }}>
                            https://net.go2trck.org/aff_lsr?id=e1e0dd84466d3d5e5877be1b23aa2cdb&click_id
                        </Typography>
                    </Box>}
                    {
                        appTrackingMethods.map((method: AppTrackingMethod, index: number) => <Typography key={index} variant='h5' sx={{ fontSize: 12, color: 'lightgray', mt: .5 }}>
                            {appTrackingMethod === method.value && method.helperText}
                        </Typography>)
                    }
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14 }}>Tracking URL</Typography>
                    <NativeTextInput defaultValue={''} helperText='' placeholder='past tracking link here' />
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
                    <CheckBoxFilter label={'Use filler data if no GAID or IDFA was provided by the source.'} handleOnChange={handleOnChange} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <Typography variant='h5' sx={{ fontSize: 14, mb: 1 }}>Link examples</Typography>
                    <Box component={'div'}
                        sx={{
                            borderBottom: '1px solid #36A689',
                            display: 'flex',
                            overflowX: 'scroll',
                            '&::-webkit-scrollbar': { display: 'none' },
                        }}>
                        <Box
                            component={'div'}
                            onClick={() => setLinkExa('mobile-app-tracking')}
                            sx={{
                                backgroundColor: `${linkExa === 'mobile-app-tracking' ? '#36A689' : ''}`,
                                fontSize: { xs: 12, sm: 14 },
                                px: 1,
                                py: .5,
                                borderRadius: '4px 4px 0 0',
                                width: 'fit-content',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                transition: '.2s',
                                '&:hover': {
                                    backgroundColor: `${linkExa === 'mobile-app-tracking' ? '#36A689' : '#121622'}`,
                                }
                            }}>
                            Mobile app tracking
                        </Box>
                        <Box
                            component={'div'}
                            onClick={() => setLinkExa('kochava')}
                            sx={{
                                backgroundColor: `${linkExa === 'kochava' ? '#36A689' : ''}`,
                                fontSize: { xs: 12, sm: 14 },
                                px: 1,
                                py: .5,
                                borderRadius: '4px 4px 0 0',
                                width: 'fit-content',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                '&:hover': {
                                    backgroundColor: `${linkExa === 'kochava' ? '#36A689' : '#121622'}`,
                                }
                            }}>
                            Kochava
                        </Box>
                        <Box
                            component={'div'}
                            onClick={() => setLinkExa('apsalar')}
                            sx={{
                                backgroundColor: `${linkExa === 'apsalar' ? '#36A689' : ''}`,
                                fontSize: { xs: 12, sm: 14 },
                                px: 1,
                                py: .5,
                                borderRadius: '4px 4px 0 0',
                                width: 'fit-content',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                '&:hover': {
                                    backgroundColor: `${linkExa === 'apsalar' ? '#36A689' : '#121622'}`,
                                }
                            }}>
                            Apsalar
                        </Box>
                        <Box
                            component={'div'}
                            onClick={() => setLinkExa('voluum')}
                            sx={{
                                backgroundColor: `${linkExa === 'voluum' ? '#36A689' : ''}`,
                                fontSize: { xs: 12, sm: 14 },
                                px: 1,
                                py: .5,
                                borderRadius: '4px 4px 0 0',
                                width: 'fit-content',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                '&:hover': {
                                    backgroundColor: `${linkExa === 'voluum' ? '#36A689' : '#121622'}`,
                                }
                            }}>
                            Voluum
                        </Box>
                        <Box
                            component={'div'}
                            onClick={() => setLinkExa('hasOffers')}
                            sx={{
                                backgroundColor: `${linkExa === 'hasOffers' ? '#36A689' : ''}`,
                                fontSize: { xs: 12, sm: 14 },
                                px: 1,
                                py: .5,
                                borderRadius: '4px 4px 0 0',
                                width: 'fit-content',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                '&:hover': {
                                    backgroundColor: `${linkExa === 'hasOffers' ? '#36A689' : '#121622'}`,
                                }
                            }}>
                            HasOffers
                        </Box>
                    </Box>
                    <Typography
                        variant='body2'
                        sx={{ fontSize: { xs: 12, sm: 13 }, color: '#36A689', px: 1, py: 2, backgroundColor: '#121622' }}>
                        {linkExa === 'mobile-app-tracking' && `https://MAT_URL/serve?action=click&publisher_id=&site_id=&offer_id=&ref_id={CLICK_ID}&sub_site={PUBLISHER_ID}`}
                        {linkExa === 'kochava' && `https://control.kochava.com/v1/cpi/click?campaign_id=&network_id=XXX&click_id={CLICK_ID}&site_id={PUBLISHER_ID}`}
                        {linkExa === 'apsalar' && `http://ad.apsalar.com/api/v1/ad?a=&i=&p=&ca&pl=&cl={CLICK_ID}&s={PUBLISHER_ID}&h=`}
                        {linkExa === 'voluum' && `http://xxxxx.trackvoluum.com/xxx-xxx-xxx-xxx-xxx?pub_id={PUBLISHER_ID}&cid={CLICK_ID}`}
                        {linkExa === 'hasOffers' && `http://appname go2cloud.org/aff_c?offer_id=&aff_id=&aff_sub={CLICK_ID}&aff_sub2={PUBLISHER_ID}`}
                    </Typography>
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
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Payout Per Install</Typography>
                        <NativeTextInput defaultValue={'0.00'} helperText='' placeholder='bid amount in $' />
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
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Cap Period</Typography>
                        <NativeSelect options={capPeriods} Placeholder={'select a cap period'} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Installs Per Period</Typography>
                        <NativeTextInput defaultValue={'25'} helperText='' placeholder='amount in $' />
                    </Box>
                </Box>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 3,
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Allow Proxy Traffic</Typography>
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
                                selectedRadioValue={allowProxyTraffic}
                                setSelectedRadioValue={setAllowProxyTraffic}
                            />
                            <RadioBtn
                                label='No (Recommended)'
                                value='no'
                                selectedRadioValue={allowProxyTraffic}
                                setSelectedRadioValue={setAllowProxyTraffic}
                            />
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
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                    <Typography variant='body2' sx={{ fontSize: 13 }}>{"By submitting this campaign, I, Zubayer Tolon, using IP address 118.179.36.97, agree to CPAlead's Terms of Service and accept all risks associated with advertising on CPAlead. I understand I have FULL control of when my campaign pays for leads, and my postback will only report leads that are not blocked by my campaign's internal quality/compatibility filters. I understand that CPAlead does NOT provide refunds for used balances under any circumstance and it is my duty as a self serve advertiser to manage my budget and traffic compatibility/quality filters. I agree to pay for all leads I report to CPAlead through my postback and these leads are NOT eligible for a refund in ANY circumstance."}
                    </Typography>
                    <Typography variant='body2' sx={{ fontSize: 13 }}>{"You will be charged $5 to submit this campaign. This amount will be refunded to you after you have posted back 5 valid conversions for this campaign. CPAlead does not guarantee that our traffic will convert your campaign. By clicking submit, you acknowledge that you understand this risk."}
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
