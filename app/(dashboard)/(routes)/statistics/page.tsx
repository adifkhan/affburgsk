'use client'

import React, { useState } from 'react'
import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import { useAppSelector } from '@/app/GlobalRedux/store';
import { dateType } from '@/types/models';
import { format } from 'date-fns';
import DateRangeButton from '@/components/ui/DateRangeButton';
import ReadOnlyDateShow from '@/components/ui/ReadOnlyDateShow';
import DateRangePickerComp from '@/components/dashComponents/DateRangePickerComp';
import { AiOutlineClear } from 'react-icons/ai';
import StatisticsTable from '@/components/dashComponents/tables/StatisticsTable';


export default function Statistics() {
    const themeDark = useAppSelector((state) => state.themeReducer.theme);
    const today: any = new Date();
    // const tenDaysAgo: Date | number = today - 1000 * 60 * 60 * 24 * 10;
    // let diffDaysRef = useRef(0);

    const [calenderOpen, setCalenderOpen] = useState<boolean>(false);
    const [rangeDate, setRangeDate] = useState<dateType>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    // const [yesterday, setYesterday] = useState<Date | number>(new Date(tenDaysAgo));
    // const [filterClear, setFilterClear] = useState<boolean>(false);
    const startDate = format(new Date(rangeDate.startDate), 'dd-MMM-yyyy');
    const endDate = format(new Date(rangeDate.endDate), 'dd-MMM-yyyy')


    // useEffect(() => {
    //     const diffDays = rangeDate.endDate.getDate() - rangeDate.startDate.getDate();
    //     diffDaysRef.current = diffDays;

    //     if (diffDays > 0) {
    //         setYesterday(rangeDate.startDate);
    //     }
    // }, [diffDaysRef, filterClear, rangeDate.endDate, rangeDate.startDate, tenDaysAgo])



    function handleCalenderOpen(e: React.ChangeEvent<HTMLInputElement>) {
        e.stopPropagation();
        setCalenderOpen((prev) => !prev)
    }
    function handleChange(ranges: any) {
        setRangeDate(ranges.selection)
    }

    return (
        <Box
            component={'div'}
            onClick={() => setCalenderOpen(false)}
            sx={{
                display: 'flex',
                flexDirection: "column",
                gap: 1.5,
                position: 'relative',
                height: '100%',
                width: '100%',
            }}>
            <Box component={'div'}>
                <Typography variant='h5'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '1.5rem'
                    }}>Statistics</Typography>
            </Box>
            <Card sx={{ backgroundColor: '#1C2437', color: 'whitesmoke', }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3, }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: .5 }}>
                        <Typography variant='h5' sx={{ fontSize: 16 }}>Search Statistics</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>Date range</Typography>
                        <Box component={'div'}
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: 'center',
                                columnGap: '20px',
                                rowGap: '10px',
                            }}>
                            <DateRangeButton handleCalenderOpen={handleCalenderOpen} />
                            <ReadOnlyDateShow label='Start date' value={startDate} />
                            <ReadOnlyDateShow label='End date' value={endDate} />
                            {calenderOpen &&
                                <Box component={'div'} onClick={(e) => e.stopPropagation()}
                                    sx={{
                                        position: 'absolute',
                                        left: { xs: 15, lg: 18 },
                                        top: { xs: '180px', lg: '180px' },
                                        zIndex: 30,
                                    }}>
                                    <DateRangePickerComp
                                        rangeDate={rangeDate}
                                        setRangeDate={setRangeDate} handleChange={handleChange}
                                    />
                                </Box>}
                            <IconButton aria-label="delete">
                                <AiOutlineClear size='1.4rem' color='#ED7D31' />
                            </IconButton>
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
                </CardContent>
            </Card>
            <StatisticsTable />
        </Box>
    )
}
