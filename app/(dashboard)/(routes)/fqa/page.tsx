'use client'

import React from 'react'
import Typography from '@mui/material/Typography';
import { useAppSelector } from '@/app/GlobalRedux/store';
import AccordionFqa from '@/components/ui/AccordionFqa';
import { Box } from '@mui/material';


export default function FQA() {
    const [expandedAccordian1, setExpandedAccordian1] = React.useState<string | false>(false);
    const [expandedAccordian2, setExpandedAccordian2] = React.useState<string | false>(false);
    const [expandedAccordian3, setExpandedAccordian3] = React.useState<string | false>(false);
    const [expandedAccordian4, setExpandedAccordian4] = React.useState<string | false>(false);
    const [expandedAccordian5, setExpandedAccordian5] = React.useState<string | false>(false);
    const [expandedAccordian6, setExpandedAccordian6] = React.useState<string | false>(false);

    // const dispatch = useDispatch<AppDispatch>();
    // const themeDark = useAppSelector((state) => state.themeReducer.theme);

    const handleChangeAccordian1 = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
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
    return (
        <Box component={'div'}
            sx={{
                width: '100%',
                display: 'flex',
                margin: '0 auto',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography variant='h5'
                sx={{
                    fontSize: '1.8rem',
                    color: '#ED7D31',
                }}>Ask Frequent Question</Typography>
            <Box component={'div'}
                sx={{
                    backgroundColor: '#1c2437',
                    padding: '20px',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    columnGap: '20px',
                    width: { xs: '100%', lg: '80%' },
                    marginTop: '30px',
                }}>
                <Box component={'div'}
                    sx={{
                        width: '100%'
                    }}>
                    <AccordionFqa expandedAccordian={expandedAccordian1} handleChangeAccordian={handleChangeAccordian1} />
                    <AccordionFqa expandedAccordian={expandedAccordian2} handleChangeAccordian={handleChangeAccordian2} />
                    <AccordionFqa expandedAccordian={expandedAccordian3} handleChangeAccordian={handleChangeAccordian3} />
                </Box>
                <Box component={'div'}
                    sx={{
                        width: '100%'
                    }}>
                    <AccordionFqa expandedAccordian={expandedAccordian4} handleChangeAccordian={handleChangeAccordian4} />
                    <AccordionFqa expandedAccordian={expandedAccordian5} handleChangeAccordian={handleChangeAccordian5} />
                    <AccordionFqa expandedAccordian={expandedAccordian6} handleChangeAccordian={handleChangeAccordian6} />
                </Box>
            </Box>
        </Box >
    )
}
