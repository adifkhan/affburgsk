'use client'
import React from 'react'
import styles from '@/styles/Dashboard/Offarwall.module.css';
import { Box, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import OfferwallTable from '@/components/dashComponents/tables/OfferwallTable';
import FilterButton from '@/components/ui/FilterButton';
import FilledTextField from '@/components/ui/FilledTextField';
import SelectTextfield from '@/components/ui/SelectTextfield';
import SearchField from '@/components/ui/SearchField';

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
        <Box component={'div'}
            sx={{
                height: '100%',
                width: '100%'
            }}>
            <Box component={'div'}>
                <Typography variant='h5'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '1.8rem'
                    }}>Offerwall</Typography>
            </Box>
            <Box component={'div'}
                sx={{
                    width: '100%',
                    display: 'flex',
                    rowGap: '20px',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    marginTop: '30px',
                }}>
                <Typography variant='body2'
                    sx={{
                        color: '#ED7D31',
                        fontSize: '1rem',
                    }}>Filter your offer:</Typography>
                <Box component={'div'}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        rowGap: '10px',
                        columnGap: '10px',
                        flexDirection: { xs: 'column', sm: 'row' }
                    }}>
                    <FilledTextField fieldLabel={'Offer'} fieldID={'offer-field'} />
                    <SelectTextfield options={vertical} fieldID={"select-vertical-field"} fieldLabel={"Vertical"} />
                    <SelectTextfield options={vertical} fieldID={"select-convertion-type"} fieldLabel={"Convertion type"} />
                    <SearchField fieldID={"search-geo-search"} fieldLabel={"Geo Search"} />
                    <SelectTextfield options={vertical} fieldID={"select-platform"} fieldLabel={"Platforms"} />
                </Box>
                <FilterButton />
                <OfferwallTable />
            </Box>
        </Box>
    )
}
