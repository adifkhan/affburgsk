'use client'
import React from 'react'
import styles from '@/styles/Dashboard/Offarwall.module.css';
import { Button, InputAdornment, MenuItem, TextField } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import OfferwallTable from '@/components/dashComponents/tables/OfferwallTable';
import { IoFilterSharp } from 'react-icons/io5';

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
const labelGEO = `GEo ${< AiOutlineSearch />}`
export default function Offerwall() {
    return (
        <div className={styles.offerwall_container}>
            <div className={styles.offerwall_heading}>
                <h1>Offerwall</h1>
            </div>
            <div className={styles.offer_filter_wrapper}>
                <p className={styles.offer_filter_wrapper_heading}>Filter your offer:</p>
                <div className={styles.offer_filter_field_wrapper}>
                    <TextField
                        autoComplete='false'
                        size='small'
                        sx={{
                            "& .MuiFilledInput-root": {
                                backgroundColor: "lightGrey",
                                color: '#1c2437',
                                border: '2px solid transparent',
                                borderRadius: '3px',
                            },
                            '&:hover .MuiFilledInput-root': {
                                backgroundColor: 'lightGrey',
                            },
                            "& .MuiFilledInput-root.Mui-focused": {
                                backgroundColor: "#1c2437",
                                color: 'WhiteSmoke',
                                border: '2px solid #ED7D31'
                            },
                            '& label.Mui-focused': {
                                color: 'white',
                            },
                        }}
                        InputProps={{ disableUnderline: true }}
                        required
                        id="filled-required"
                        label="Offer"
                        variant="filled"
                        fullWidth
                    />
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Vertical"
                        defaultValue="ALL"
                        // helperText="Please select your currency"
                        variant="filled"
                        fullWidth
                        size='small'
                        InputProps={{ disableUnderline: true }}
                        sx={{
                            "& .MuiFilledInput-root": {
                                backgroundColor: "lightGrey",
                                color: '#1c2437',
                                border: '2px solid transparent',
                                borderRadius: '3px',
                            },
                            '&:hover .MuiFilledInput-root': {
                                backgroundColor: 'lightGrey',
                            },
                            "& .MuiFilledInput-root.Mui-focused": {
                                backgroundColor: "#1c2437",
                                color: 'WhiteSmoke',
                                border: '2px solid #ED7D31'
                            },
                            '& label.Mui-focused': {
                                color: 'white',
                            },
                            "& .MuiFilledInput-root.Mui-focused .MuiSvgIcon-root": {
                                color: "orange"
                            }
                        }}
                    >
                        {vertical.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Conversion Type"
                        defaultValue="ALL"
                        variant="filled"
                        fullWidth
                        size='small'
                        InputProps={{ disableUnderline: true }}
                        sx={{
                            "& .MuiFilledInput-root": {
                                backgroundColor: "lightGrey",
                                color: '#1c2437',
                                border: '2px solid transparent',
                                borderRadius: '3px',
                            },
                            '&:hover .MuiFilledInput-root': {
                                backgroundColor: 'lightGrey',
                            },
                            "& .MuiFilledInput-root.Mui-focused": {
                                backgroundColor: "#1c2437",
                                color: 'WhiteSmoke',
                                border: '2px solid #ED7D31'
                            },
                            '& label.Mui-focused': {
                                color: 'white',
                            },
                            "& .MuiFilledInput-root.Mui-focused .MuiSvgIcon-root": {
                                color: "orange"
                            }
                        }}
                    >
                        {vertical.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="filled-search"
                        label="GEO search"
                        type="search"
                        variant="filled"
                        fullWidth
                        size='small'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    < AiOutlineSearch color='grey' size='20px' />
                                </InputAdornment>
                            ),
                            disableUnderline: true
                        }}
                        sx={{
                            "& .MuiFilledInput-root": {
                                backgroundColor: "lightGrey",
                                color: '#1c2437',
                                border: '2px solid transparent',
                                borderRadius: '3px',
                            },
                            '&:hover .MuiFilledInput-root': {
                                backgroundColor: 'lightGrey',
                            },
                            "& .MuiFilledInput-root.Mui-focused": {
                                backgroundColor: "#1c2437",
                                color: 'WhiteSmoke',
                                border: '2px solid #ED7D31'
                            },
                            '& label.Mui-focused': {
                                color: 'white',
                            },
                        }}
                    />
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Platform"
                        defaultValue="ALL"
                        variant="filled"
                        fullWidth
                        size='small'
                        InputProps={{ disableUnderline: true }}
                        sx={{
                            "& .MuiFilledInput-root": {
                                backgroundColor: "lightGrey",
                                color: '#1c2437',
                                border: '2px solid transparent',
                                borderRadius: '3px',
                            },
                            '&:hover .MuiFilledInput-root': {
                                backgroundColor: 'lightGrey',
                            },
                            "& .MuiFilledInput-root.Mui-focused": {
                                backgroundColor: "#1c2437",
                                color: 'WhiteSmoke',
                                border: '2px solid #ED7D31'
                            },
                            '& label.Mui-focused': {
                                color: 'white',
                            },
                            "& .MuiFilledInput-root.Mui-focused .MuiSvgIcon-root": {
                                color: "orange"
                            }
                        }}
                    >
                        {vertical.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <Button
                    sx={{
                        bgcolor: '#ED7D31', fontSize: '.8rem', px: '15px', py: '8px', letterSpacing: '.1ch', fontFamily: 'Dosis',
                        '&:hover': {
                            bgcolor: '#ED7D31', boxShadow: 'none',
                        },
                    }} component="label" variant="contained" startIcon={<IoFilterSharp />}>
                    Apply Filter
                </Button>
                <OfferwallTable />
            </div>
            <div>
            </div>
        </div>
    )
}
