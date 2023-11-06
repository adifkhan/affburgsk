'use client'
import React from 'react'
import styles from '@/styles/Dashboard/Fqa.module.css';
import Search from '@/components/dashComponents/Search';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdExpandMore, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

// type ThemeProps = {
//     themeDark: string | null;
// }

export default function FQA() {
    const [expandedAccordian1, setExpandedAccordian1] = React.useState<string | false>(false);
    const [expandedAccordian2, setExpandedAccordian2] = React.useState<string | false>(false);
    const [expandedAccordian3, setExpandedAccordian3] = React.useState<string | false>(false);
    const [expandedAccordian4, setExpandedAccordian4] = React.useState<string | false>(false);
    const [expandedAccordian5, setExpandedAccordian5] = React.useState<string | false>(false);
    const [expandedAccordian6, setExpandedAccordian6] = React.useState<string | false>(false);

    const handleChangeAccordian1 =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedAccordian1(isExpanded ? panel : false);
        };

    const handleChangeAccordian2 =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedAccordian2(isExpanded ? panel : false);
        };
    const handleChangeAccordian3 =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedAccordian3(isExpanded ? panel : false);
        };
    const handleChangeAccordian4 =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedAccordian4(isExpanded ? panel : false);
        };
    const handleChangeAccordian5 =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedAccordian5(isExpanded ? panel : false);
        };
    const handleChangeAccordian6 =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedAccordian6(isExpanded ? panel : false);
        };
    // console.log(themeDark)
    return (
        <div className={styles.fqa_container}>
            <h1 className={styles.fqa_heading}>Ask Frequent Question</h1>
            <div className={styles.search_module}>
                {/* <Search themeDark={themeDark} /> */}
            </div>
            <div className={styles.questions_module}>
                <div className={styles.questions_module_left}>
                    <Accordion
                        sx={{
                            backgroundColor: "#164863",
                            borderRadius: "6px 6px 6px 6px",
                            marginBottom: '20px'
                        }}
                        expanded={expandedAccordian1 === 'panel'} onChange={handleChangeAccordian1('panel')}>
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
                            <Typography sx={{ width: '100%', fontSize: '.9rem', display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                                <MdOutlineKeyboardDoubleArrowRight size='1.2rem' />How to create own postback URLs
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor: "#1c2437",
                                borderRadius: "0 0 4px 4px",
                                padding: '20px 20px',
                                color: 'lightGrey'
                            }}
                        >
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{
                            backgroundColor: "#164863",
                            borderRadius: "6px 6px 6px 6px",
                            marginBottom: '20px'
                        }}
                        expanded={expandedAccordian2 === 'panel'} onChange={handleChangeAccordian2('panel')}>
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
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '100%', fontSize: '.9rem', display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                                <MdOutlineKeyboardDoubleArrowRight size='1.2rem' />How to create own postback URLs
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor: "#1c2437",
                                borderRadius: "0 0 4px 4px",
                                padding: '20px 20px',
                                color: 'lightGrey'
                            }}
                        >
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{
                            backgroundColor: "#164863",
                            borderRadius: "6px 6px 6px 6px",
                            marginBottom: '20px',
                        }}
                        expanded={expandedAccordian3 === 'panel'} onChange={handleChangeAccordian3('panel')}>
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
                            <Typography sx={{ width: '100%', fontSize: '.9rem', display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                                <MdOutlineKeyboardDoubleArrowRight size='1.2rem' />How to create own postback URLs
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor: "#1c2437",
                                borderRadius: "0 0 4px 4px",
                                padding: '20px 20px',
                                color: 'lightGrey'
                            }}
                        >
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className={styles.questions_module_right}>
                    <Accordion
                        sx={{
                            backgroundColor: "#164863",
                            borderRadius: "6px 6px 6px 6px",
                            marginBottom: '20px'
                        }}
                        expanded={expandedAccordian4 === 'panel'} onChange={handleChangeAccordian4('panel')}>
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
                            <Typography sx={{ width: '100%', fontSize: '.9rem', display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                                <MdOutlineKeyboardDoubleArrowRight size='1.2rem' />How to create own postback URLs
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor: "#1c2437",
                                borderRadius: "0 0 4px 4px",
                                padding: '20px 20px',
                                color: 'lightGrey'
                            }}
                        >
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{
                            backgroundColor: "#164863",
                            borderRadius: "6px 6px 6px 6px",
                            marginBottom: '20px'
                        }}
                        expanded={expandedAccordian5 === 'panel'} onChange={handleChangeAccordian5('panel')}>
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
                            <Typography sx={{ width: '100%', fontSize: '.9rem', display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                                <MdOutlineKeyboardDoubleArrowRight size='1.2rem' />How to create own postback URLs
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor: "#1c2437",
                                borderRadius: "0 0 4px 4px",
                                padding: '20px 20px',
                                color: 'lightGrey'
                            }}
                        >
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{
                            backgroundColor: "#164863",
                            borderRadius: "6px 6px 6px 6px",
                            marginBottom: '20px'
                        }}
                        expanded={expandedAccordian6 === 'panel'} onChange={handleChangeAccordian6('panel')}>
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
                            <Typography sx={{ width: '100%', fontSize: '.9rem', display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                                <MdOutlineKeyboardDoubleArrowRight size='1.2rem' />How to create own postback URLs
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor: "#1c2437",
                                borderRadius: "0 0 4px 4px",
                                padding: '20px 20px',
                                color: 'lightGrey'
                            }}
                        >
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div >
    )
}
