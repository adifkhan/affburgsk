'use client'

import DateRangePickerComp from '@/components/dashComponents/DateRangePickerComp';
import CheckBoxFilter from '@/components/ui/CheckBoxFilter';
import DateRangeButton from '@/components/ui/DateRangeButton';
import NativeAutoComplete from '@/components/ui/NativeAutoComplete';
import ReadOnlyDateShow from '@/components/ui/ReadOnlyDateShow';
import { dateType } from '@/types/models';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const options = ['Options 1', 'Options 2'];

export default function CPCSources() {
    const router = useRouter();
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

    function handleOnChange() {
        console.log('Check box value underdevelop !!!!!!!!!!!!!!!!!')
    }


    return (
        <Box
            component={'div'}
            onClick={() => setCalenderOpen(false)}
            sx={{
                display: 'flex',
                flexDirection: "column",
                gap: 1.5,
                color: 'whitesmoke',
                position: 'relative',
                height: '100%',
                width: '100%',
            }}>
            <Box component={'div'}>
                <Typography variant='h5'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '1.5rem'
                    }}>CPC Traffic Sources</Typography>
            </Box>
            <Card sx={{ backgroundColor: '#1C2437', color: 'whitesmoke', mt: 2 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography variant='h5' sx={{ fontSize: 16 }}>Select Your Range</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
                        <Box component={'div'}
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: 'center',
                                columnGap: '20px',
                                gap: 1,
                            }}>
                            <DateRangeButton handleCalenderOpen={handleCalenderOpen} />
                            <ReadOnlyDateShow label='Start date' value={startDate} />
                            <ReadOnlyDateShow label='End date' value={endDate} />
                            {calenderOpen &&
                                <Box component={'div'} onClick={(e) => e.stopPropagation()}
                                    sx={{
                                        position: 'absolute',
                                        left: { xs: 15, lg: 18 },
                                        top: { xs: '210px', lg: '210px' },
                                        zIndex: 30,
                                    }}>
                                    <DateRangePickerComp
                                        rangeDate={rangeDate}
                                        setRangeDate={setRangeDate} handleChange={handleChange}
                                    />
                                </Box>}
                        </Box>
                        <CheckBoxFilter
                            label={'Only show sources that sent traffic during time period'}
                            handleOnChange={handleOnChange} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                        <Typography variant='h5' sx={{ fontSize: 14 }}>CPC Campaign</Typography>
                        <NativeAutoComplete placeholder={''} options={options} defaultValue={options[0]} />
                    </Box>
                </CardContent>
            </Card>
            <Button
                onClick={() => router.push('/createNewCampaign')}
                size='small'
                sx={{
                    bgcolor: '#ED7D31', fontSize: '.8rem', px: '12px', py: '6px', letterSpacing: '.1ch', fontFamily: 'Dosis', boxShadow: 'none', width: 'fit-content',
                    '&:hover': {
                        bgcolor: '#ED7D31', boxShadow: 'none',
                    },
                }} component="label" variant="contained">
                Submit
            </Button>
            <Card sx={{
                backgroundColor: '#1C2437', mt: 2, color: '#36A689'
            }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, }}>
                    <em style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>Choose CPC campaign and date range to view results.</em>
                </CardContent>
            </Card>
        </Box >
    )
}