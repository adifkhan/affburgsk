'use client'
import React, { useState } from 'react'
import styles from '@/styles/Dashboard/PostbackURLS.module.css';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import { AiFillLock, AiFillUnlock } from 'react-icons/ai';
import { LiaSave } from 'react-icons/lia';
import { MdExpandMore, MdOutlineAddLink, MdOutlineSaveAs } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';
import { BiMessageDetail } from 'react-icons/bi';
import Link from 'next/link';
import OpenLinkDetailsTable from '@/components/dashComponents/tables/OpenLinkDetailsTable';
const vertical = [
    {
        value: 'ALL',
        label: 'All',
    },
    {
        value: 'Astro',
        label: 'Astro',
    },
    {
        value: 'Astro',
        label: 'Astro',
    },
    {
        value: 'Astro',
        label: 'Astro',
    },
    {
        value: 'Astro',
        label: 'Astro',
    },
];

export default function PostbackURLs() {
    const [trackingOpen, setTrackingOpen] = useState<boolean>(false);
    const [expandedAccordian2, setExpandedAccordian2] = React.useState<string | false>(false);

    function handleTrackingField() {
        if (!trackingOpen) {
            setTrackingOpen(!trackingOpen)
        }
    }

    const handleChangeAccordian2 =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedAccordian2(isExpanded ? panel : false);
        };
    return (
        <div className={styles.postback_container}>
            <div className={styles.postback_heading}>
                <h1>Postback Urls</h1>
            </div>
            <div className={styles.postback_filter_wrapper}>
                <p className={styles.postback_filter_wrapper_heading}>Edit tracking code:</p>
                <TextField
                    sx={{
                        "& .MuiFilledInput-root": {
                            backgroundColor: "lightGrey",
                            color: '#1c2437',
                            border: '2px solid transparent',
                            borderRadius: '3px',
                        },
                        '&:hover .MuiFilledInput-root': {
                            backgroundColor: 'lightGrey',
                        },
                        "& .MuiFilledInput-root.Mui-focused": {
                            backgroundColor: "#1c2437",
                            color: 'WhiteSmoke',
                            border: '2px solid #ED7D31'
                        },
                        '& label.Mui-focused': {
                            color: 'white',
                        },
                        " .MuiFormHelperText-root": {
                            color: "lightGrey",
                            ml: 0
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {!trackingOpen ? < AiFillLock color='grey' size='20px' /> : < AiFillUnlock color='grey' size='20px' />}
                            </InputAdornment>
                        ),
                        disableUnderline: true,
                        readOnly: trackingOpen ? false : true
                    }}
                    helperText="See how to block below for the details"
                    autoComplete='false'
                    size='small'
                    required
                    id="filled-required"
                    label="Tracking code"
                    variant="filled"
                    fullWidth
                />
                <Button
                    onClick={handleTrackingField}
                    sx={{
                        bgcolor: '#ED7D31', fontSize: '.8rem', px: '15px', py: '8px', letterSpacing: '.1ch', fontFamily: 'Dosis', '&:hover': {
                            bgcolor: '#ED7D31', boxShadow: 'none',

                        }
                    }} component="label" variant="contained" startIcon={!trackingOpen ? <AiFillLock /> : <LiaSave />}>
                    {!trackingOpen ? 'Unlock Field' : 'Save tracking Code'}
                </Button>
                <div className={styles.add_a_link_module}>
                    <Typography sx={{ color: 'lightGrey', display: 'flex', alignItems: 'center', columnGap: '15px', fontSize: '2rem', marginBottom: '20px' }}>
                        Informational events postback
                    </Typography>
                    <Typography sx={{ color: '#ED7D31', display: 'flex', alignItems: 'center', columnGap: '15px', fontSize: '1.2rem' }}>
                        <MdOutlineAddLink size='2rem' /> Add a new link
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex', columnGap: '20px', alignItems: 'center', margin: '20px 0',
                        }}
                        component='div' >
                        <TextField
                            id="filled-select-currency"
                            select
                            label="Event Type"
                            defaultValue="ALL"
                            variant="filled"
                            size='small'
                            InputProps={{ disableUnderline: true }}
                            sx={{
                                width: '30%',
                                "& .MuiFilledInput-root": {
                                    backgroundColor: "lightGrey",
                                    color: '#1c2437',
                                    border: '2px solid transparent',
                                    borderRadius: '3px',
                                },
                                '&:hover .MuiFilledInput-root': {
                                    backgroundColor: 'lightGrey',
                                },
                                "& .MuiFilledInput-root.Mui-focused": {
                                    backgroundColor: "#1c2437",
                                    color: 'WhiteSmoke',
                                    border: '2px solid #ED7D31'
                                },
                                '& label.Mui-focused': {
                                    color: 'white',
                                },
                                "& .MuiFilledInput-root.Mui-focused .MuiSvgIcon-root": {
                                    color: "orange"
                                }
                            }}
                        >
                            {vertical.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="filled-select-currency"
                            select
                            label="Event"
                            defaultValue="ALL"
                            variant="filled"
                            size='small'
                            InputProps={{ disableUnderline: true }}
                            sx={{
                                width: '30%',
                                "& .MuiFilledInput-root": {
                                    backgroundColor: "lightGrey",
                                    color: '#1c2437',
                                    border: '2px solid transparent',
                                    borderRadius: '3px',
                                },
                                '&:hover .MuiFilledInput-root': {
                                    backgroundColor: 'lightGrey',
                                },
                                "& .MuiFilledInput-root.Mui-focused": {
                                    backgroundColor: "#1c2437",
                                    color: 'WhiteSmoke',
                                    border: '2px solid #ED7D31'
                                },
                                '& label.Mui-focused': {
                                    color: 'white',
                                },
                                "& .MuiFilledInput-root.Mui-focused .MuiSvgIcon-root": {
                                    color: "orange"
                                }
                            }}
                        >
                            {vertical.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            autoComplete='false'
                            size='small'
                            sx={{
                                "& .MuiFilledInput-root": {
                                    backgroundColor: "lightGrey",
                                    color: '#1c2437',
                                    border: '2px solid transparent',
                                    borderRadius: '3px',
                                },
                                '&:hover .MuiFilledInput-root': {
                                    backgroundColor: 'lightGrey',
                                },
                                "& .MuiFilledInput-root.Mui-focused": {
                                    backgroundColor: "#1c2437",
                                    color: 'WhiteSmoke',
                                    border: '2px solid #ED7D31'
                                },
                                '& label.Mui-focused': {
                                    color: 'white',
                                },
                            }}
                            InputProps={{ disableUnderline: true }}
                            required
                            id="filled-required"
                            label="Event code"
                            variant="filled"
                            fullWidth
                        />
                    </Box>
                    <Button
                        sx={{
                            bgcolor: '#ED7D31', fontSize: '.8rem', px: '15px', py: '8px', letterSpacing: '.1ch', fontFamily: 'Dosis', width: '150px',
                            '&:hover': {
                                bgcolor: '#ED7D31', boxShadow: 'none',
                            },
                        }} component="label" variant="contained" startIcon={<MdOutlineSaveAs />}>
                        Save Changes
                    </Button>
                </div>
                <div className={styles.accordion_container}>
                    <Accordion
                        sx={{
                            backgroundColor: "#164863",
                            borderRadius: "6px 6px 6px 6px",
                        }}
                        expanded={expandedAccordian2 === 'panel2'} onChange={handleChangeAccordian2('panel2')}>
                        <AccordionSummary
                            sx={{
                                "&.MuiAccordionSummary-root": {
                                    color: 'whiteSmoke',
                                },
                                "& .MuiAccordionSummary-contentGutters": {
                                    display: 'flex',
                                    alignItems: 'center'
                                },
                                "& .MuiAccordionSummary-expandIconWrapper": {
                                    fontSize: '25px',
                                    color: 'lightGrey',
                                },

                            }}
                            expandIcon={<MdExpandMore />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography component='p' sx={{ width: '33%', flexShrink: 0, fontSize: '1.2rem', textTransform: "capitalize", fontWeight: '400', fontFamily: 'Ubuntu' }}>
                                How to create own postback URLs
                            </Typography>
                            <Typography sx={{ color: 'lightGrey' }}>Details about adding a ne postback URL</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor: "#1c2437",
                                borderRadius: "0 0 4px 4px",
                                padding: '40px 20px'
                            }}
                        >
                            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', }}>
                                <Box
                                    sx={{ rowGap: '15px', display: 'flex', flexDirection: 'column' }}
                                    component={'div'}>
                                    <Typography sx={{ color: 'whiteSmoke', display: 'flex', alignItems: 'center', columnGap: '10px', fontSize: '1rem' }}>
                                        <RxDotFilled color='#ED7D31' size='1.5rem' /> Here you can create your own postback URLs that will be sent any time you have a new transaction.
                                    </Typography>
                                    <Typography sx={{ color: 'whiteSmoke', display: 'flex', alignItems: 'center', columnGap: '10px', fontSize: '1rem' }}>
                                        <RxDotFilled color='#ED7D31' size='1.5rem' /> The example of postback URL: <Typography sx={{ color: '#ED7D31', fontSize: '1.2rem' }} component='span'>
                                            <Link href='#'>http://your-domain.com</Link>
                                        </Typography>
                                    </Typography>
                                    <Typography sx={{ color: 'whiteSmoke', display: 'flex', alignItems: 'center', columnGap: '10px', fontSize: '1rem' }}>
                                        <RxDotFilled color='#ED7D31' size='1.5rem' /> After creating the postback URL, ask your manager to approve it. If the code is not approved, it will not work.
                                    </Typography>
                                </Box>
                                <Box sx={{ mx: 'auto' }} component={'span'}><BiMessageDetail opacity='.4' color='grey' size='8rem' /></Box>
                            </Box>
                            <Box sx={{ marginTop: '50px' }}>
                                <OpenLinkDetailsTable />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div >
        </div >
    )
}
