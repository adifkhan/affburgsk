'use client'

import React, { useState, useRef } from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import { format } from 'date-fns';
import { MainReportData, dateType } from '@/types/models';
import DateRangePickerComp from '@/components/dashComponents/DateRangePickerComp';
import { AiOutlineClear } from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';
import MainReportTable from '@/components/dashComponents/tables/MainReportTable';
import ExportButton from '@/components/ui/ExportButton';
import DateRangeButton from '@/components/ui/DateRangeButton';
import FilterButton from '@/components/ui/FilterButton';
import CheckBoxFilter from '@/components/ui/CheckBoxFilter';
import SelectTextfield from '@/components/ui/SelectTextfield';
import ReadOnlyDateShow from '@/components/ui/ReadOnlyDateShow';




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
function createData(
    id: string,
    Date: string,
    Clicks: number,
    Registrations: number,
    Confirms: number,
    Installs: number,
    Sales: number,
    Click2Reg: number,
    Reg2Conf: number,
    Reg2Sale: number,
    EPC: number,
    Revenue: number,
): MainReportData {
    return {
        id,
        Date,
        Clicks,
        Registrations,
        Confirms,
        Installs,
        Sales,
        Click2Reg,
        Reg2Conf,
        Reg2Sale,
        EPC,
        Revenue
    };
}

const rowsData = [
    createData('1', '21-10-2023', 305, 3, 67, 4, 45, 987, 654, 22, 78.00, 98.10),
    createData('2', '22-10-2023', 452, 25, 51, 4, 45, 987, 654, 22, 78.00, 98.10),
    createData('3', '23-10-2023', 262, 16, 24, 6, 45, 987, 654, 22, 78.00, 98.10),
    createData('4', '24-10-2023', 159, 6, 24, 4, 45, 987, 654, 22, 78.00, 98.10),
    createData('5', '25-10-2023', 356, 16, 49, 3, 45, 987, 654, 22, 78.00, 98.10),
    createData('6', '26-10-2023', 408, 3., 87, 6, 45, 987, 654, 22, 78.00, 98.10),
    createData('7', '27-10-2023', 237, 9., 37, 4, 45, 987, 654, 22, 78.00, 98.10),
    createData('8', '28-11-2023', 375, 0, 94, 0, 45, 987, 654, 22, 78.00, 98.10),
    createData('9', '29-10-2023', 518, 26, 65, 7, 45, 987, 654, 22, 78.00, 98.10),
    createData('10', '30-10-2023', 392, 0, 98, 0, 45, 987, 654, 22, 78.00, 98.10),
    createData('11', '31-10-2023', 318, 0, 81, 2, 45, 987, 654, 22, 78.00, 98.10),
    createData('12', '01-11-2023', 360, 19, 9, 37, 45, 987, 654, 22, 78.00, 98.10),
    createData('13', '01-11-2023', 437, 18, 63, 4, 45, 987, 654, 22, 78.00, 98.10),
];

export default function MainReport() {
    const today: any = new Date();
    // const tenDaysAgo: Date | number = today - 1000 * 60 * 60 * 24 * 10;
    // let diffDaysRef = useRef(0);

    const [calenderOpen, setCalenderOpen] = useState<boolean>(false);
    const [rangeDate, setRangeDate] = useState<dateType>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const startDate = format(new Date(rangeDate.startDate), 'dd-MMM-yyyy');
    const endDate = format(new Date(rangeDate.endDate), 'dd-MMM-yyyy');
    // const [ago, setAgo] = useState<Date | number>(new Date(tenDaysAgo));
    // const [startDate, setStartDate] = useState<Date>(new Date(rangeDate.startDate));
    // const [endDate, setEndtDate] = useState<Date>(new Date(rangeDate.endDate));


    // useEffect(() => {
    //     const diffDays = rangeDate.endDate.getDate() - rangeDate.startDate.getDate();
    //     diffDaysRef.current = diffDays;

    //     if (diffDays > 0) {
    //         setAgo(rangeDate.startDate);
    //     }
    // }, [diffDaysRef, rangeDate.endDate, rangeDate.startDate, tenDaysAgo])


    function handleCalenderOpen(e: React.ChangeEvent<HTMLInputElement>) {
        e.stopPropagation();
        setCalenderOpen((prev) => !prev)
    }
    function handleChange(ranges: any) {
        setRangeDate(ranges.selection)
    }
    function handleOnChange() {
        console.log('Check box value underdevelop !!!!!!!!!!!!!!!!!')
    }
    return (
        <Box component={'div'} onClick={() => setCalenderOpen(false)} >
            <Typography variant='h5'
                sx={{
                    fontSize: '1.5rem',
                    color: '#ED7D31',
                }}>Main Report</Typography>
            <Box component={'div'}
                sx={{
                    marginTop: '30px',
                    paddingLeft: '20px',
                    borderLeft: '4px solid #ED7D31',
                    color: 'whiteSmoke'
                }}>
                <Typography
                    variant='h6'
                    sx={{
                        fontSize: { xs: '.8rem', sm: '1rem' },
                        letterSpacing: '.1ch', textAlign: 'justify'
                    }}
                >Conversions are subjected to automatic fraud check conducted by our system within 10 minutes after receiving them. Upon check completion, all conversions in <q>Approved</q> status will be sent to you via S2S Postback (in case you installed it). Please note that the advertiser reserves the right to conduct an additional fraud check within the current payment period.</Typography>
            </Box>
            <Box component={'div'} sx={{
                width: '100%',
                height: 'fit-content',
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '50px',
                marginBottom: '20px',
            }}>
                <ExportButton />
            </Box>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    columnGap: '10px',
                    backgroundColor: '#1C2437',
                    padding: '30px 20px',
                    borderRadius: '4px',
                    zIndex: -1,
                    rowGap: '10px'
                }}>
                <Box component={'div'}
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', sm: 'row' },
                        position: 'relative',
                        columnGap: '10px',
                        rowGap: '10px',
                        width: '100%',
                    }}>
                    <DateRangeButton handleCalenderOpen={handleCalenderOpen} />
                    <ReadOnlyDateShow label='Start date' value={startDate} />
                    <ReadOnlyDateShow label='End date' value={endDate} />
                    {calenderOpen && <Box component={'div'}
                        sx={{
                            position: 'absolute',
                            left: 0,
                            bottom: { xs: '-240px', sm: '-355px', lg: '-360px' },
                            zIndex: 30,
                        }}>
                        <DateRangePickerComp rangeDate={rangeDate} setRangeDate={setRangeDate} handleChange={handleChange} />
                    </Box>}
                </Box>
                <Box sx={{ display: 'flex', width: '100%', columnGap: '10px', flexDirection: { xs: 'column', sm: 'row' }, rowGap: '10px' }}>
                    <SelectTextfield options={vertical} fieldID={"filled-select-currency"} fieldLabel={"Conversion Type"} />
                    <SelectTextfield options={vertical} fieldID={"filled-select-currency"} fieldLabel={"Conversion Type"} />
                    <SelectTextfield options={vertical} fieldID={"filled-select-currency"} fieldLabel={"Conversion Type"} />
                </Box>
            </Box>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    columnGap: '20px',
                    marginTop: '20px',
                    padding: '0 20px',
                }}>
                <FilterButton />
                <IconButton aria-label="delete">
                    <AiOutlineClear size='1.2rem' color='#ED7D31' />
                </IconButton>
            </Box>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    columnGap: '20px',
                    marginTop: '40px',
                    paddingLeft: '20px',
                    color: '#ED7D31',
                    fontSize: '1rem',
                    fontWeight: 500,
                    marginBottom: '50px',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    flexDirection: { xs: 'column', sm: 'row' },
                }}>
                <Box component={'span'}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                    }}><IoMdAddCircleOutline size={22} />Add additional columns:</Box>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        columnGap: '10px',
                        color: 'lightgrey',
                    }}>
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                </Box>
            </Box>
            <Box component={'div'}>
                <MainReportTable mainReportAllData={rowsData} />
            </Box>
        </ Box>
    )
}
