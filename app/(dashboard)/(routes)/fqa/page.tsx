'use client'

import React from 'react'
import styles from '@/styles/Dashboard/Fqa.module.css';
import Search from '@/components/dashComponents/Search';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdExpandMore, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { useAppSelector } from '@/app/GlobalRedux/store';
import AccordionFqa from '@/components/ui/AccordionFqa';


export default function FQA() {
    const [expandedAccordian1, setExpandedAccordian1] = React.useState<string | false>(false);
    const [expandedAccordian2, setExpandedAccordian2] = React.useState<string | false>(false);
    const [expandedAccordian3, setExpandedAccordian3] = React.useState<string | false>(false);
    const [expandedAccordian4, setExpandedAccordian4] = React.useState<string | false>(false);
    const [expandedAccordian5, setExpandedAccordian5] = React.useState<string | false>(false);
    const [expandedAccordian6, setExpandedAccordian6] = React.useState<string | false>(false);

    // const dispatch = useDispatch<AppDispatch>();
    const themeDark = useAppSelector((state) => state.themeReducer.theme);

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
    // console.log(themeDark)
    return (
        <div className={styles.fqa_container}>
            <h1 className={styles.fqa_heading}>Ask Frequent Question</h1>
            <div className={styles.search_module}>
                <Search themeDark={themeDark} />
            </div>
            <div className={styles.questions_module}>
                <div className={styles.questions_module_left}>
                    <AccordionFqa expandedAccordian={expandedAccordian1} handleChangeAccordian={handleChangeAccordian1} />
                    <AccordionFqa expandedAccordian={expandedAccordian2} handleChangeAccordian={handleChangeAccordian2} />
                    <AccordionFqa expandedAccordian={expandedAccordian3} handleChangeAccordian={handleChangeAccordian3} />
                </div>
                <div className={styles.questions_module_right}>
                    <AccordionFqa expandedAccordian={expandedAccordian4} handleChangeAccordian={handleChangeAccordian4} />
                    <AccordionFqa expandedAccordian={expandedAccordian5} handleChangeAccordian={handleChangeAccordian5} />
                    <AccordionFqa expandedAccordian={expandedAccordian6} handleChangeAccordian={handleChangeAccordian6} />
                </div>
            </div>
        </div >
    )
}
