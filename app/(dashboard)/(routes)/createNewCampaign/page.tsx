'use client'

import React from 'react'
import { Box, Card, CardContent, MenuItem, Select, SelectChangeEvent, Typography, styled } from '@mui/material';
import CostPerClick from '@/components/dashComponents/CostPerClick';
import MobileAppInstall from '@/components/dashComponents/MobileAppInstall';
import MobileAppReview from '@/components/dashComponents/MobileAppReview';
import CostPerAction from '@/components/dashComponents/CostPerAction';
import PinSubmitCPA from '@/components/dashComponents/PinSubmitCPA';

const allCampaignStatus = ['Active'];
const geoTypes = ['By country'];
const campaignTypes = [
    'Mobile App Install (CPI or CPE)',
    'Pay For Mobile App Review (CPR)',
    'CPA (Cost Per Action)',
    'CPC (Cost Per Click)',
    'Pin Submit CPA (Cost Per Action)'
];
const conversionGoals = [
    'Install app',
    'Sign up for account',
    'Complete servey',
    'Play game for 5 minutes',
    'Custom'
];
const conversionGoalsCPA = [
    'Complete survey',
    'Sign up for account',
    'PIN submit',
    'Purchase',
    'Install app',
    'Custom'
];
const appTrackingMethods = [
    {
        label: 'CPAlead Tracking SDK',
        value: 'CPAlead-tracking-SDK',
        helperText: 'In order to use this method, you must install our Tracking SDK into your application, click here for more information'
    },
    {
        label: 'Appstore Review Verify (Easy Setup)',
        value: 'appstore-review-verify-EasySetup',
        helperText: 'Appstore Review Verify selected, users will be required to review your application, you will be charged per successful review'
    },
    {
        label: 'AppsFlyer',
        value: 'appsFlyer',
        helperText: 'If you have access to the source code of the iOS or Android app, AppsFlyer is the most popular SDK available and will allow you to report back to CPAlead when an install event takes place. AppsFlyer also provides very robust statistics for your App which is an added bonus. To get started, create an account on AppsFlyer then follow their instructions for installing their SDK. Once the AppsFlyer SDK is installed on your iOS or Android app, you will be able to select ‘CPAlead’ as a partner within the AppsFlyer platform. If you have any questions, you can always ask the AppsFlyer staff. For the tracking URL, you will want to provide the tracking URL you receive from AppsFlyer. It should look something like this: https://app.appsflyer.com/com.developername.gamename?pid=cpalead_int&af_click_lookback=5g&c=GameName_CpaLead_Promo_Camp2&clickid={CLICK_ID}&af_siteid={PUBLISHER_ID}&af_cost_value={CPI_COST}&af_cost_currency=USD&af_cost_model=CPI'
    },
    {
        label: 'Other 3rd Party',
        value: 'other-3rd-party',
        helperText: 'You are responsible for copying and pasting the Postback URL above to your 3rd party tracking platform or the Affiliate Network that provided you this offer. If you need help setting up our postback, please contact the Affiliate Network that provided you with this offer or the provider of your tracking platform. Non-converting offers will be removed and you may lose your ability to list CPA or CPI offers. Please be extra sure your postback is setup correctly before you submit your campaign. Click here for a tutorial.'
    },
];
const capPeriods = [
    'Every 24 hours',
    'Every 12 hours',
    'Every 8 hours',
    'Every 6 hours',
    'Every 4 hours',
];
export default function NewCampaign() {
    const [campaignType, setCampaignType] = React.useState('CPC (Cost Per Click)');
    const [conversionGoal, setConversionGoal] = React.useState('');
    const [status, setStatus] = React.useState('Active');
    const [selectedRadioValue, setSelectedRadioValue] = React.useState<string>('24-hours');
    const [targetOfferWall, setTargetOfferWall] = React.useState<string>('no');
    const [allowProxyTraffic, setAllowProxyTraffic] = React.useState<string>('no');
    const [boostCampaign, setBoostCampaign] = React.useState<string>('yes');
    const [publisher, setPublisher] = React.useState<string>('allow-all');
    const [appTrackingMethod, setAppTrackingMethod] = React.useState<string>('CPAlead-tracking-SDK');


    const handleCampaignTypeChange = (event: SelectChangeEvent) => {
        setCampaignType(event.target.value);
    };

    function handleOnChange() {
        console.log('Check box value underdevelop')
    }
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
                    }}>Add New Campaign</Typography>
            </Box>
            <Card sx={{ backgroundColor: '#1C2437', color: 'whitesmoke', mt: 2 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3, }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>INFORMATIONS</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Campaign Type</Typography>
                        <Select
                            fullWidth
                            size='small'
                            value={campaignType}
                            // displayEmpty
                            onChange={handleCampaignTypeChange}
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
                            {
                                campaignTypes.map((option, index) => <MenuItem sx={{ fontSize: 12 }} key={index} value={option}>{option}</MenuItem>)
                            }
                        </Select>
                    </Box>
                    {campaignType === 'Pin Submit CPA (Cost Per Action)' &&
                        <Typography variant='body2' sx={{ backgroundColor: '#121622', px: 1, py: 2, borderRadius: 1, color: '#36A689', fontSize: 13 }}><em style={{ fontWeight: 600, fontSize: 14 }}>Note:</em> Only create PIN-Submit campaigns to this category or campaign will be denied.</Typography>
                    }
                    {campaignType === 'Mobile App Install (CPI or CPE)' && <MobileAppInstall
                        geoTypes={geoTypes}
                        countries={countries}
                        conversionGoals={conversionGoals}
                        handleOnChange={handleOnChange}
                        selectedRadioValue={selectedRadioValue}
                        setSelectedRadioValue={setSelectedRadioValue}
                        appTrackingMethod={appTrackingMethod}
                        setAppTrackingMethod={setAppTrackingMethod}
                        conversionGoal={conversionGoal}
                        setConversionGoal={setConversionGoal}
                        appTrackingMethods={appTrackingMethods}
                        targetOfferWall={targetOfferWall}
                        setTargetOfferWall={setTargetOfferWall}
                        capPeriods={capPeriods}
                        allowProxyTraffic={allowProxyTraffic}
                        setAllowProxyTraffic={setAllowProxyTraffic}
                        boostCampaign={boostCampaign}
                        setBoostCampaign={setBoostCampaign}
                    />}
                    {campaignType === 'Pay For Mobile App Review (CPR)' && <MobileAppReview
                        allCampaignStatus={allCampaignStatus}
                        status={status}
                        setStatus={setStatus}
                        geoTypes={geoTypes}
                        countries={countries}
                        handleOnChange={handleOnChange}
                        selectedRadioValue={selectedRadioValue}
                        setSelectedRadioValue={setSelectedRadioValue}
                        publisher={publisher}
                        setPublisher={setPublisher} />}
                    {campaignType === 'CPA (Cost Per Action)' && <CostPerAction
                        geoTypes={geoTypes}
                        countries={countries}
                        conversionGoals={conversionGoalsCPA}
                        handleOnChange={handleOnChange}
                        selectedRadioValue={selectedRadioValue}
                        setSelectedRadioValue={setSelectedRadioValue}
                        appTrackingMethod={appTrackingMethod}
                        setAppTrackingMethod={setAppTrackingMethod}
                        conversionGoal={conversionGoal}
                        setConversionGoal={setConversionGoal}
                        appTrackingMethods={appTrackingMethods}
                        targetOfferWall={targetOfferWall}
                        setTargetOfferWall={setTargetOfferWall}
                        capPeriods={capPeriods}
                        allowProxyTraffic={allowProxyTraffic}
                        setAllowProxyTraffic={setAllowProxyTraffic}
                        boostCampaign={boostCampaign}
                        setBoostCampaign={setBoostCampaign}
                    />}
                    {campaignType === 'CPC (Cost Per Click)' && <CostPerClick
                        allCampaignStatus={allCampaignStatus}
                        status={status}
                        setStatus={setStatus}
                        geoTypes={geoTypes}
                        countries={countries}
                        handleOnChange={handleOnChange}
                        selectedRadioValue={selectedRadioValue}
                        setSelectedRadioValue={setSelectedRadioValue}
                        publisher={publisher}
                        setPublisher={setPublisher} />}
                    {campaignType === 'Pin Submit CPA (Cost Per Action)' && <PinSubmitCPA
                        geoTypes={geoTypes}
                        countries={countries}
                        conversionGoals={conversionGoalsCPA}
                        handleOnChange={handleOnChange}
                        selectedRadioValue={selectedRadioValue}
                        setSelectedRadioValue={setSelectedRadioValue}
                        appTrackingMethod={appTrackingMethod}
                        setAppTrackingMethod={setAppTrackingMethod}
                        conversionGoal={conversionGoal}
                        setConversionGoal={setConversionGoal}
                        appTrackingMethods={appTrackingMethods}
                        targetOfferWall={targetOfferWall}
                        setTargetOfferWall={setTargetOfferWall}
                        capPeriods={capPeriods}
                        allowProxyTraffic={allowProxyTraffic}
                        setAllowProxyTraffic={setAllowProxyTraffic}
                        boostCampaign={boostCampaign}
                        setBoostCampaign={setBoostCampaign}
                    />}
                </CardContent>
            </Card>
        </Box>
    )
}

const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
