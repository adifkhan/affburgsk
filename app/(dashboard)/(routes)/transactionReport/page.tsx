'use client'

import React, { useState, useEffect, useRef } from 'react'
import styles from '@/styles/Dashboard/TransactionReport.module.css'
import { Autocomplete, Box, Button, MenuItem, TextField, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { CountryType, TransactionDataType, dateType } from '@/types/models';
import { format } from 'date-fns';
import DateRangePickerComp from '@/components/dashComponents/DateRangePickerComp';
import { AiOutlineClear } from 'react-icons/ai';
import { TbStatusChange, TbTransform } from 'react-icons/tb';
import { MdClear } from 'react-icons/md';
import { BiSelectMultiple, BiTransfer } from 'react-icons/bi';
import { RiInsertColumnLeft, RiInsertColumnRight } from 'react-icons/ri';
import TransReportTable from '@/components/dashComponents/tables/TransReportTable';
import ExportButton from '@/components/ui/ExportButton';
import CheckBoxFilter from '@/components/ui/CheckBoxFilter';
import FilterButton from '@/components/ui/FilterButton';
import DateRangeButton from '@/components/ui/DateRangeButton';
import ClearAllcheckBtn from '@/components/ui/ClearAllcheckBtn';
import SelectAllCheckBtn from '@/components/ui/SelectAllCheckBtn';
import SelectTextfield from '@/components/ui/SelectTextfield';
import AdvancedFilterBtn from '@/components/ui/AdvancedFilterBtn';
import FilledTextField from '@/components/ui/FilledTextField';
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
): TransactionDataType {
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
const cpaOffers = [
    {
        value: 'ALL',
        label: 'All',
    },
    {
        value: 'Adsempire direct mobsite ALL m.benaughty.com Sale',
        label: 'Adsempire direct mobsite ALL m.benaughty.com Sale',
    },
    {
        value: 'Adsempire direct website ALL Japanhotties.jp SOI',
        label: 'Adsempire direct website ALL Japanhotties.jp SOI',
    },
    {
        value: 'Adsempire direct websiteALL benaughty.com Sale',
        label: 'Adsempire',
    },
    {
        value: 'Adsempire direct websiteALL onenightfriend.com SOI',
        label: 'Adsempire direct websiteALL onenightfriend.com SOI',
    },
];
const platforms = [
    {
        value: 'ALL',
        label: 'All',
    },
    {
        value: 'Web',
        label: 'Web',
    },
    {
        value: 'Mobile',
        label: 'Mobile',
    },
];

export default function TransactionReport() {
    const today: any = new Date();
    const tenDaysAgo: Date | number = today - 1000 * 60 * 60 * 24 * 10;
    let diffDaysRef = useRef(0);

    const [calenderOpen, setCalenderOpen] = useState<boolean>(false);
    const [rangeDate, setRangeDate] = useState<dateType>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const startDate = format(new Date(rangeDate.startDate), 'dd-MMM-yyyy');
    const endDate = format(new Date(rangeDate.endDate), 'dd-MMM-yyyy');
    // const [yesterday, setYesterday] = useState<Date | number>(new Date(tenDaysAgo));
    // const [startDate, setStartDate] = useState<Date>(new Date(rangeDate.startDate));
    // const [endDate, setEndtDate] = useState<Date>(new Date(rangeDate.endDate));
    // const [filterClear, setFilterClear] = useState<boolean>(false);


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
        <Box component={'div'} onClick={() => setCalenderOpen(false)}>
            <Typography variant='h5'
                sx={{
                    fontSize: '1.5rem',
                    color: '#ED7D31',
                }}>Transaction Report</Typography>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    columnGap: '10px',
                    alignItems: 'center',
                    backgroundColor: '#1c2437',
                    padding: '30px 20px',
                    borderRadius: '4px',
                    marginTop: '50px',
                    flexDirection: { xs: 'column', xl: 'row' },
                    rowGap: '10px',
                }}>
                <Box component={'div'}
                    sx={{
                        display: 'flex', width: '100%', columnGap: '10px', flexDirection: { xs: 'column', sm: 'row' }, rowGap: '10px'
                    }}>
                    <SelectTextfield options={cpaOffers} fieldID={"select-cpa-offer"} fieldLabel={"CPA Offer"} />
                    <Autocomplete
                        id="country-select-demo"
                        fullWidth
                        sx={{
                            // '& .MuiFilledInput-underline': {
                            //     color: 'red',
                            //     backgroundColor: 'red'
                            // },
                            "& .MuiFilledInput-root": {
                                maxHeight: '45px',
                                backgroundColor: "#1c2437",
                                color: 'lightGrey',
                                border: '1px solid #ED7D31',
                                borderRadius: '3px',
                                fontSize: '.7rem',
                                '&.Mui-focused': {
                                    backgroundColor: "#131926",
                                    color: 'WhiteSmoke',
                                    border: '2px solid #ED7D31',
                                    "& .MuiSvgIcon-root": {
                                        color: "#ED7D31"
                                    },
                                },
                                '&:hover': {
                                    backgroundColor: "#131926",
                                    // color: 'WhiteSmoke',
                                    // border: '2px solid #ED7D31',
                                    // "& .MuiSvgIcon-root": {
                                    //     color: "#ED7D31"
                                    // },
                                },
                            },
                            "& .MuiSvgIcon-root": {
                                color: "#ED7D31"
                            },

                            '& label': {
                                color: 'whiteSmoke',
                                fontSize: '.7rem'
                            },
                            '& label.Mui-focused': {
                                color: 'whiteSmoke',
                            },
                            // '&:hover label': {
                            //     color: 'white',
                            // },

                        }}

                        options={countries}
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                            <Box
                                component="li"
                                sx={{

                                }} {...props}>
                                <Image
                                    height={15}
                                    width={15}
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    alt=""
                                />
                                {option.label} ({option.code})
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                variant="filled"
                                {...params}
                                label="Choose country"
                                inputProps={{ ...params.inputProps }}
                            />
                        )}
                    />
                    <SelectTextfield options={platforms} fieldID={'select-platforms'} fieldLabel={"Platforms"} />
                </Box>
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
                            marginTop: '2px',
                            position: 'absolute',
                            left: 0,
                            bottom: { xs: '-240px', sm: '-355px', lg: '-360px' },
                            zIndex: 1,
                        }}>
                        <DateRangePickerComp rangeDate={rangeDate} setRangeDate={setRangeDate} handleChange={handleChange} />
                    </Box>}
                </Box>
            </Box>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '20px',
                    marginTop: '20px',
                }}>
                <FilterButton />
                <AdvancedFilterBtn />
                <IconButton aria-label="delete">
                    <AiOutlineClear size='1.2rem' color='#ED7D31' />
                </IconButton>
            </Box>
            <Typography variant='h5'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '10px',
                    fontSize: '1.2rem',
                    color: '#ED7D31',
                    marginTop: '50px'
                }}>
                <TbTransform size='1.5rem' />
                Tansactions Type
            </Typography>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '15px',
                    marginTop: '20px',
                    width: { xs: '100%', md: '50%', },
                    paddingLeft: '40px',
                }}>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        columnGap: '15px',
                    }}>
                    <FilledTextField fieldLabel={'Sub ID'} fieldID={'sub-id-field'} />
                    <FilledTextField fieldLabel={'Click ID'} fieldID={'click-id-field'} />
                </Box>
                <Box component={'div'}
                    sx={{
                        color: 'whitesmoke',
                    }}>
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                </Box>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        columnGap: '15px',
                    }}>
                    <ClearAllcheckBtn />
                    <SelectAllCheckBtn />
                </Box>
            </Box>

            {/* convertion and status section */}
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    columnGap: '50px',
                    flexDirection: { xs: 'column', sm: 'row' },
                    rowGap: '15px'
                }}>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '15px',
                        width: { xs: '100%', md: '50%' }
                    }}>
                    <Typography variant='h5'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '10px',
                            fontSize: '1.2rem',
                            color: '#ED7D31',
                            marginTop: { xs: '20px', sm: '30px', xl: '50px' },
                        }}>
                        <BiTransfer size='1.5rem' />
                        Convertion Type
                    </Typography>
                    <Box component={'div'}
                        sx={{
                            color: 'whitesmoke',
                            marginLeft: '40px',
                        }}>
                        <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                        <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                        <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                        <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                        <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    </Box>
                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            columnGap: '15px',
                            marginLeft: '40px',
                        }}>
                        <ClearAllcheckBtn />
                        <SelectAllCheckBtn />
                    </Box>
                </Box>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '15px',
                        width: { xs: '100%', md: '50%' }
                    }}>
                    <Typography variant='h5'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '10px',
                            fontSize: '1.2rem',
                            color: '#ED7D31',
                            marginTop: { xs: '20px', sm: '30px', xl: '50px' },
                        }}>
                        <TbStatusChange size='1.5rem' />
                        Status
                    </Typography>
                    <Box component={'div'}
                        sx={{
                            color: 'whitesmoke',
                            marginLeft: '40px',
                        }}>
                        <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                        <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    </Box>
                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            columnGap: '15px',
                            marginLeft: '40px',
                        }}>
                        <ClearAllcheckBtn />
                        <SelectAllCheckBtn />
                    </Box>
                </Box>
            </Box>

            {/* Additional column section */}
            <Typography variant='h5'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '10px',
                    fontSize: '1.2rem',
                    color: '#ED7D31',
                    marginTop: '50px'
                }}>
                <RiInsertColumnRight size='1.5rem' />
                Additional Columns
            </Typography>
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '15px',
                    marginTop: '20px',
                    paddingLeft: '40px',
                }}>
                <Box component={'div'}
                    sx={{
                        color: 'whitesmoke',
                    }}>
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                    <CheckBoxFilter label={'Install'} handleOnChange={handleOnChange} />
                </Box>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        columnGap: '15px',
                    }}>
                    <ClearAllcheckBtn />
                    <SelectAllCheckBtn />
                </Box>
            </Box>
            <Box component={'div'} sx={{ mt: '30px' }}>
                <Box component={'div'}
                    sx={{
                        textAlign: 'right',
                        marginBottom: '20px',
                    }}>
                    <ExportButton />
                </Box>
                <TransReportTable transReportAllData={rowsData} />
                <Box component={'div'}
                    sx={{
                        padding: '20px 20px',
                        backgroundColor: '#1c2437',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '10px',
                        marginBottom: '50px',
                    }}>
                    <Box component={'span'}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            backgroundColor: '#27374D',
                            padding: '10px 20px',
                            borderRadius: '4px',
                            color: 'whitesmoke'
                        }}>
                        <Typography variant='body2'>Samamry</Typography>
                        <Typography variant='body2' sx={{ color: '#ED7D31' }}>$12000520</Typography>
                    </Box>
                    <Box component={'span'}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            backgroundColor: '#27374D',
                            padding: '10px 20px',
                            borderRadius: '4px',
                            color: 'whitesmoke'
                        }}>
                        <Typography variant='body2'>Total</Typography>
                        <Typography variant='body2' sx={{ color: '#ED7D31' }}>$65251222</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

const countries: readonly CountryType[] = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
        code: 'AE',
        label: 'United Arab Emirates',
        phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
        code: 'AG',
        label: 'Antigua and Barbuda',
        phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
        code: 'AU',
        label: 'Australia',
        phone: '61',
        suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
        code: 'BA',
        label: 'Bosnia and Herzegovina',
        phone: '387',
    },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
    { code: 'BI', label: 'Burundi', phone: '257' },
    { code: 'BJ', label: 'Benin', phone: '229' },
    { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { code: 'BM', label: 'Bermuda', phone: '1-441' },
    { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { code: 'BO', label: 'Bolivia', phone: '591' },
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'BT', label: 'Bhutan', phone: '975' },
    { code: 'BV', label: 'Bouvet Island', phone: '47' },
    { code: 'BW', label: 'Botswana', phone: '267' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BZ', label: 'Belize', phone: '501' },
    {
        code: 'CA',
        label: 'Canada',
        phone: '1',
        suggested: true,
    },
    {
        code: 'CC',
        label: 'Cocos (Keeling) Islands',
        phone: '61',
    },
    {
        code: 'CD',
        label: 'Congo, Democratic Republic of the',
        phone: '243',
    },
    {
        code: 'CF',
        label: 'Central African Republic',
        phone: '236',
    },
    {
        code: 'CG',
        label: 'Congo, Republic of the',
        phone: '242',
    },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { code: 'CK', label: 'Cook Islands', phone: '682' },
    { code: 'CL', label: 'Chile', phone: '56' },
    { code: 'CM', label: 'Cameroon', phone: '237' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'CO', label: 'Colombia', phone: '57' },
    { code: 'CR', label: 'Costa Rica', phone: '506' },
    { code: 'CU', label: 'Cuba', phone: '53' },
    { code: 'CV', label: 'Cape Verde', phone: '238' },
    { code: 'CW', label: 'Curacao', phone: '599' },
    { code: 'CX', label: 'Christmas Island', phone: '61' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    {
        code: 'DE',
        label: 'Germany',
        phone: '49',
        suggested: true,
    },
    { code: 'DJ', label: 'Djibouti', phone: '253' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'DM', label: 'Dominica', phone: '1-767' },
    {
        code: 'DO',
        label: 'Dominican Republic',
        phone: '1-809',
    },
    { code: 'DZ', label: 'Algeria', phone: '213' },
    { code: 'EC', label: 'Ecuador', phone: '593' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'EH', label: 'Western Sahara', phone: '212' },
    { code: 'ER', label: 'Eritrea', phone: '291' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'ET', label: 'Ethiopia', phone: '251' },
    { code: 'FI', label: 'Finland', phone: '358' },
    { code: 'FJ', label: 'Fiji', phone: '679' },
    {
        code: 'FK',
        label: 'Falkland Islands (Malvinas)',
        phone: '500',
    },
    {
        code: 'FM',
        label: 'Micronesia, Federated States of',
        phone: '691',
    },
    { code: 'FO', label: 'Faroe Islands', phone: '298' },
    {
        code: 'FR',
        label: 'France',
        phone: '33',
        suggested: true,
    },
    { code: 'GA', label: 'Gabon', phone: '241' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'GD', label: 'Grenada', phone: '1-473' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'GF', label: 'French Guiana', phone: '594' },
    { code: 'GG', label: 'Guernsey', phone: '44' },
    { code: 'GH', label: 'Ghana', phone: '233' },
    { code: 'GI', label: 'Gibraltar', phone: '350' },
    { code: 'GL', label: 'Greenland', phone: '299' },
    { code: 'GM', label: 'Gambia', phone: '220' },
    { code: 'GN', label: 'Guinea', phone: '224' },
    { code: 'GP', label: 'Guadeloupe', phone: '590' },
    { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { code: 'GR', label: 'Greece', phone: '30' },
    {
        code: 'GS',
        label: 'South Georgia and the South Sandwich Islands',
        phone: '500',
    },
    { code: 'GT', label: 'Guatemala', phone: '502' },
    { code: 'GU', label: 'Guam', phone: '1-671' },
    { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { code: 'GY', label: 'Guyana', phone: '592' },
    { code: 'HK', label: 'Hong Kong', phone: '852' },
    {
        code: 'HM',
        label: 'Heard Island and McDonald Islands',
        phone: '672',
    },
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    {
        code: 'IO',
        label: 'British Indian Ocean Territory',
        phone: '246',
    },
    { code: 'IQ', label: 'Iraq', phone: '964' },
    {
        code: 'IR',
        label: 'Iran, Islamic Republic of',
        phone: '98',
    },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    {
        code: 'JP',
        label: 'Japan',
        phone: '81',
        suggested: true,
    },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    {
        code: 'KN',
        label: 'Saint Kitts and Nevis',
        phone: '1-869',
    },
    {
        code: 'KP',
        label: "Korea, Democratic People's Republic of",
        phone: '850',
    },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
        code: 'LA',
        label: "Lao People's Democratic Republic",
        phone: '856',
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
        code: 'MD',
        label: 'Moldova, Republic of',
        phone: '373',
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
        code: 'MF',
        label: 'Saint Martin (French part)',
        phone: '590',
    },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    {
        code: 'MK',
        label: 'Macedonia, the Former Yugoslav Republic of',
        phone: '389',
    },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    {
        code: 'MP',
        label: 'Northern Mariana Islands',
        phone: '1-670',
    },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    {
        code: 'PM',
        label: 'Saint Pierre and Miquelon',
        phone: '508',
    },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    {
        code: 'PS',
        label: 'Palestine, State of',
        phone: '970',
    },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    {
        code: 'SJ',
        label: 'Svalbard and Jan Mayen',
        phone: '47',
    },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    {
        code: 'ST',
        label: 'Sao Tome and Principe',
        phone: '239',
    },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    {
        code: 'SX',
        label: 'Sint Maarten (Dutch part)',
        phone: '1-721',
    },
    {
        code: 'SY',
        label: 'Syrian Arab Republic',
        phone: '963',
    },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    {
        code: 'TC',
        label: 'Turks and Caicos Islands',
        phone: '1-649',
    },
    { code: 'TD', label: 'Chad', phone: '235' },
    {
        code: 'TF',
        label: 'French Southern Territories',
        phone: '262',
    },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    {
        code: 'TT',
        label: 'Trinidad and Tobago',
        phone: '1-868',
    },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    {
        code: 'TW',
        label: 'Taiwan, Republic of China',
        phone: '886',
    },
    {
        code: 'TZ',
        label: 'United Republic of Tanzania',
        phone: '255',
    },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    {
        code: 'US',
        label: 'United States',
        phone: '1',
        suggested: true,
    },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    {
        code: 'VA',
        label: 'Holy See (Vatican City State)',
        phone: '379',
    },
    {
        code: 'VC',
        label: 'Saint Vincent and the Grenadines',
        phone: '1-784',
    },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    {
        code: 'VG',
        label: 'British Virgin Islands',
        phone: '1-284',
    },
    {
        code: 'VI',
        label: 'US Virgin Islands',
        phone: '1-340',
    },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];