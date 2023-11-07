'use client'
import React, { useState, useEffect, useRef } from 'react'
import styles from '@/styles/Dashboard/PayoutHistory.module.css';
import DateRangePickerComp from '@/components/dashComponents/DateRangePickerComp';
import { Button, IconButton, styled } from '@mui/material';
import { BsCalendar3 } from 'react-icons/bs';
import { format } from 'date-fns';
import { PayoutHistoryData, dateType } from '@/types/models';
import PayoutHistoryTable from '@/components/dashComponents/tables/PayoutHistoryTable';
import { BiDownload } from 'react-icons/bi';
import { AiOutlineClear } from 'react-icons/ai';
import ExportButton from '@/components/ui/ExportButton';
import DateRangeButton from '@/components/ui/DateRangeButton';



const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

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
    const tenDaysAgo: Date | number = today - 1000 * 60 * 60 * 24 * 10;
    let diffDaysRef = useRef(0);

    const [calenderOpen, setCalenderOpen] = useState<boolean>(false);
    const [rangeDate, setRangeDate] = useState<dateType>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const [yesterday, setYesterday] = useState<Date | number>(new Date(tenDaysAgo));
    const [startDate, setStartDate] = useState<Date>(new Date(rangeDate.startDate));
    const [endDate, setEndtDate] = useState<Date>(new Date(rangeDate.endDate));
    const [filterClear, setFilterClear] = useState<boolean>(false);


    useEffect(() => {
        const diffDays = rangeDate.endDate.getDate() - rangeDate.startDate.getDate();
        diffDaysRef.current = diffDays;

        if (diffDays > 0) {
            setYesterday(rangeDate.startDate);
        }
    }, [diffDaysRef, filterClear, rangeDate.endDate, rangeDate.startDate, tenDaysAgo])



    function handleCalenderOpen() {
        setCalenderOpen((prev) => !prev)
    }
    function handleChange(ranges: any) {
        setRangeDate(ranges.selection)
    }
    // function handleClearFilter() {
    //     setFilterClear(true)
    //     console.log(filterClear)
    // }

    // const lastTenDaysData = () => rowsData.filter((row) => row.Date >= startDate && row.Date <= endDate)
    // console.log(rangeDate)
    // console.log(typeof (startDate))

    return (
        <div className={styles.payout_history_container}>
            <div className={styles.payout_history_heading}>
                <h1>Payout Histoty</h1>
            </div>
            <div className={styles.date_range_show_module}>
                <div className={styles.date_range_show_module_left}>
                    <DateRangeButton handleCalenderOpen={handleCalenderOpen} />
                    <h5>{format(yesterday, "dd-MMM-yyyy")}</h5>
                    <p>to</p>
                    <h5>{format(rangeDate.endDate, "dd-MMM-yyyy")}</h5>
                    {calenderOpen && <div className={styles.date_range_container}>
                        <DateRangePickerComp rangeDate={rangeDate} setRangeDate={setRangeDate} handleChange={handleChange} />
                    </div>}
                    <IconButton aria-label="delete">
                        <AiOutlineClear size='1.2rem' color='#ED7D31' />
                    </IconButton>
                </div>
                <ExportButton />
            </div>
            <div className={styles.history_table_container}>
                <PayoutHistoryTable rowsAllData={rowsData} />
            </div>
        </div>
    )
}
