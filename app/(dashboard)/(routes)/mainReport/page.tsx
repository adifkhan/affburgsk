'use client'

import React, { useState, useEffect, useRef } from 'react'
import styles from '@/styles/Dashboard/MainReport.module.css'
import { IconButton, MenuItem, TextField, styled } from '@mui/material';
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
    const tenDaysAgo: Date | number = today - 1000 * 60 * 60 * 24 * 10;
    let diffDaysRef = useRef(0);

    const [calenderOpen, setCalenderOpen] = useState<boolean>(false);
    const [rangeDate, setRangeDate] = useState<dateType>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const [ago, setAgo] = useState<Date | number>(new Date(tenDaysAgo));
    const [startDate, setStartDate] = useState<Date>(new Date(rangeDate.startDate));
    const [endDate, setEndtDate] = useState<Date>(new Date(rangeDate.endDate));


    useEffect(() => {
        const diffDays = rangeDate.endDate.getDate() - rangeDate.startDate.getDate();
        diffDaysRef.current = diffDays;

        if (diffDays > 0) {
            setAgo(rangeDate.startDate);
        }
    }, [diffDaysRef, rangeDate.endDate, rangeDate.startDate, tenDaysAgo])


    function handleCalenderOpen() {
        setCalenderOpen((prev) => !prev)
    }
    function handleChange(ranges: any) {
        setRangeDate(ranges.selection)
    }
    function handleOnChange() {
        console.log('Check box value underdevelop !!!!!!!!!!!!!!!!!')
    }
    return (
        <div>
            <h1 className={styles.main_heading}>Main Report</h1>
            <div className={styles.main_report_desc}>
                <h5>Conversions are subjected to automatic fraud check conducted by our system within 10 minutes after receiving them. Upon check completion, all conversions in <q>Approved</q> status will be sent to you via S2S Postback (in case you installed it). Please note that the advertiser reserves the right to conduct an additional fraud check within the current payment period.</h5>
            </div>
            <div className={styles.export_btn_module}>
                <ExportButton />
            </div>

            <div className={styles.filter_section}>
                <div className={styles.date_range_show_module}>
                    <DateRangeButton handleCalenderOpen={handleCalenderOpen} />
                    <h5>{format(ago, "dd-MMM-yyyy")}</h5>
                    <p>to</p>
                    <h5>{format(rangeDate.endDate, "dd-MMM-yyyy")}</h5>
                    {calenderOpen && <div className={styles.date_range_container}>
                        <DateRangePickerComp rangeDate={rangeDate} setRangeDate={setRangeDate} handleChange={handleChange} />
                    </div>}
                </div>
                <SelectTextfield options={vertical} fieldID={"filled-select-currency"} fieldLabel={"Conversion Type"} />
                <SelectTextfield options={vertical} fieldID={"filled-select-currency"} fieldLabel={"Conversion Type"} />
                <SelectTextfield options={vertical} fieldID={"filled-select-currency"} fieldLabel={"Conversion Type"} />
            </div>
            <div className={styles.filter_btn_module}>
                <FilterButton />
                <IconButton aria-label="delete">
                    <AiOutlineClear size='1.2rem' color='#ED7D31' />
                </IconButton>
            </div>
            <div className={styles.additional_column_module}>
                <span><IoMdAddCircleOutline size={22} />Add additional columns:</span>
                <div className={styles.column_check_module}>
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                </div>
            </div>
            <div>
                <MainReportTable mainReportAllData={rowsData} />
            </div>
        </div >
    )
}
