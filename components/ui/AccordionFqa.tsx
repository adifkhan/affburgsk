import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import { MdExpandMore, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

type AccordianProps = {
    expandedAccordian: string | false;
    handleChangeAccordian: any;
}
export default function AccordionFqa({ expandedAccordian, handleChangeAccordian }: AccordianProps) {
    return (
        <>
            <Accordion
                sx={{
                    backgroundColor: "#164863",
                    borderRadius: "6px 6px 6px 6px",
                    marginBottom: '20px'
                }}
                expanded={expandedAccordian === 'panel'} onChange={handleChangeAccordian('panel')}>
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
                        backgroundColor: "#121622",
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
        </>
    )
}
