'use client';

import React, { useState } from 'react';
import styles from '@/styles/Dashboard/PostbackURLS.module.css';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import { AiFillLock, AiFillUnlock } from 'react-icons/ai';
import { LiaSave } from 'react-icons/lia';
import { MdExpandMore, MdOutlineAddLink, MdOutlineSaveAs } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';
import { BiMessageDetail } from 'react-icons/bi';
import Link from 'next/link';
import OpenLinkDetailsTable from '@/components/dashComponents/tables/OpenLinkDetailsTable';
import SelectTextfield from '@/components/ui/SelectTextfield';
import FilledTextField from '@/components/ui/FilledTextField';
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
        <Box component={'div'}
            sx={{
                height: '100%',
                width: '100%'
            }}>
            <Box component={'div'}
                sx={{
                    color: '#ED7D31',
                    fontSize: '2rem',
                }}>
                <Typography variant='h5'>Postback Urls</Typography>
            </Box>
            <Box component={'div'}
                sx={{
                    width: '100%',
                    display: 'flex',
                    rowGap: '20px',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    marginTop: '30px',
                }}>
                <Typography variant='body2'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '1rem',
                    }}>Edit tracking code:</Typography>

                <TextField
                    helperText="See how to block below for the details"
                    autoComplete='false'
                    size='small'
                    required
                    id="filled-required"
                    label="Tracking code"
                    variant="filled"
                    fullWidth
                    sx={{
                        "& .MuiFilledInput-root": {
                            backgroundColor: "#1C2437",
                            borderRadius: '3px',
                            border: '1px solid #ED7D31',
                            color: 'WhiteSmoke'
                        },
                        // '&:hover .MuiFilledInput-root': {
                        //     backgroundColor: 'lightGrey',
                        // },
                        // "& .MuiFilledInput-root.Mui-focused": {
                        //     backgroundColor: "#1c2437",
                        //     color: 'WhiteSmoke',
                        //     border: '2px solid #ED7D31'
                        // },
                        '& label': {
                            color: 'whiteSmoke',
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
                        disabled: trackingOpen ? false : true
                    }}
                />
                <Button
                    onClick={handleTrackingField}
                    sx={{
                        bgcolor: '#ED7D31',
                        fontSize: '.7rem',
                        px: '10px',
                        py: '6px',
                        letterSpacing: '.1ch',
                        fontFamily: 'Dosis',
                        '&:hover': {
                            bgcolor: '#ED7D31',
                            boxShadow: 'none',

                        }
                    }}
                    component="label"
                    variant="contained"
                    startIcon={!trackingOpen ?
                        <AiFillLock size={18} />
                        :
                        <LiaSave size={18} />}>
                    {!trackingOpen ? 'Unlock Field' : 'Save tracking Code'}
                </Button>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#1c2437',
                        width: '100%',
                        marginTop: '30px',
                        borderRadius: '4px',
                        padding: '30px 20px',
                    }}>
                    <Typography
                        sx={{
                            color: 'lightGrey',
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '15px', fontSize: '1.5rem',
                            marginBottom: '20px'
                        }}>
                        Informational events postback
                    </Typography>
                    <Typography
                        sx={{
                            color: '#ED7D31',
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '15px', fontSize: '1rem'
                        }}>
                        <MdOutlineAddLink size='1.8rem' /> Add a new link
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: { xs: 0, sm: '10px', md: '20px' },
                            alignItems: 'center',
                            margin: '20px 0',
                            rowGap: { xs: '10px', sm: 0 },
                            flexDirection: { xs: 'column', sm: 'row' }
                        }}
                        component='div' >
                        <SelectTextfield
                            options={vertical}
                            fieldID={"select-event-type"}
                            fieldLabel={"Event Type"} />
                        <SelectTextfield
                            options={vertical}
                            fieldID={"select-eventr"}
                            fieldLabel={"Event"} />
                        <FilledTextField
                            fieldID={'event-code'}
                            fieldLabel={'Event Code'} />
                    </Box>
                    <Button
                        sx={{
                            bgcolor: '#ED7D31',
                            fontSize: '.7rem',
                            py: '6px',
                            letterSpacing: '.1ch',
                            fontFamily: 'Dosis',
                            width: '150px',
                            '&:hover': {
                                bgcolor: '#ED7D31',
                                boxShadow: 'none',
                            },
                        }}
                        component="label"
                        variant="contained"
                        startIcon={<MdOutlineSaveAs size={15} />}>
                        Save Changes
                    </Button>
                </Box>
                <Box component={'div'}
                    sx={{
                        width: '100%',
                        marginTop: '50px',
                    }}>
                    <Accordion
                        sx={{
                            backgroundColor: "#164863",
                            borderRadius: "6px 6px 6px 6px",
                            marginBottom: '50px',
                        }}
                        expanded={expandedAccordian2 === 'panel2'} onChange={handleChangeAccordian2('panel2')}>
                        <AccordionSummary
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
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
                            id="panel1bh-header">
                            <Typography
                                component='p'
                                sx={{
                                    width: { xs: '100%', md: '33%' },
                                    display: 'flex',
                                    flexShrink: 0,
                                    fontSize: { xs: '1rem', lg: '1.2rem' },
                                    textTransform: "capitalize",
                                    fontWeight: '400',
                                    fontFamily: 'Ubuntu'
                                }}>
                                How to create own postback URLs
                            </Typography>
                            <Typography component={'p'} sx={{ color: 'lightGrey', display: { xs: 'none', md: 'block' } }}>Details about adding a ne postback URL</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor: "#1c2437",
                                borderRadius: "0 0 4px 4px",
                                padding: '40px 20px'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    alignItems: 'center',
                                    flexDirection: { xs: 'column-reverse', lg: 'row' },
                                }}>
                                <Box
                                    sx={{
                                        rowGap: '15px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                    }}
                                    component={'div'}>
                                    <Typography
                                        sx={{
                                            color: 'whiteSmoke',
                                            display: 'flex',
                                            alignItems: 'center',
                                            columnGap: '10px',
                                            fontSize: { xs: '.8rem', md: '1rem', lg: '1rem' }
                                        }}>
                                        <RxDotFilled
                                            color='#ED7D31'
                                            size={20} /> Here you can create your own postback URLs that will be sent any time you have a new transaction.
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: 'whiteSmoke',
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: { xs: '.8rem', md: '1rem', lg: '1rem' }
                                        }}>
                                        <RxDotFilled
                                            color='#ED7D31'
                                            size={20} />
                                        <Typography sx={{ display: 'flex', fontSize: { xs: '.8rem', md: '1rem', lg: '1rem' } }}>The example of postback URL: <Link style={{ color: '#ED7D31', }} href='#'>http://your-domain.com</Link></Typography>
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'whiteSmoke',
                                            display: 'flex',
                                            alignItems: 'center',
                                            columnGap: '10px',
                                            fontSize: { xs: '.8rem', md: '1rem', lg: '1rem' }
                                        }}>
                                        <RxDotFilled
                                            color='#ED7D31'
                                            size={20} /> After creating the postback URL, ask your manager to approve it. If the code is not approved, it will not work.
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{ mx: 'auto' }}
                                    component={'span'}>
                                    <BiMessageDetail
                                        opacity='.4'
                                        color='grey'
                                        size='8rem' />
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '50px' }}>
                                <OpenLinkDetailsTable />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box >
        </Box >
    )
}
