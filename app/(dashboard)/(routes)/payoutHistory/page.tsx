'use client'
import React, { useState } from 'react'
import DateRangePickerComp from '@/components/dashComponents/DateRangePickerComp';
import { Box, TextField, IconButton, Typography } from '@mui/material';
import { format } from 'date-fns';
import { PayoutHistoryData, dateType } from '@/types/models';
import PayoutHistoryTable from '@/components/dashComponents/tables/PayoutHistoryTable';
import { AiOutlineClear } from 'react-icons/ai';
import ExportButton from '@/components/ui/ExportButton';
import DateRangeButton from '@/components/ui/DateRangeButton';
import ReadOnlyDateShow from '@/components/ui/ReadOnlyDateShow';


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
): PayoutHistoryData {
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




export default function PayoutHistory() {
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
        <Box component={'div'} onClick={() => setCalenderOpen(false)}
            sx={{
                height: '100%',
                width: '100%',
            }}>
            <Typography sx={{
                color: '#ED7D31',
                fontSize: '1.8rem'
            }} variant='h5'>Payout Histoty</Typography>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    marginTop: '30px',
                    alignItems: { xs: 'normal', sm: 'center' },
                    marginBottom: '5px',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'row' },
                    position: 'relative',
                    width: '100%'
                }}>
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
                                left: 0,
                                bottom: { xs: '-165px', sm: '-355px', lg: '-360px' },
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
                </Box>
                <Box>
                    <ExportButton />
                </Box>
            </Box>
            <Box component={'div'}
                sx={{
                    marginTop: '50px',
                    zIndex: -1,
                }}>
                <PayoutHistoryTable rowsAllData={rowsData} />
            </Box>
        </Box >
    )
}
