'use client'
import React from 'react'
import styles from '@/styles/Dashboard/Offarwall.module.css';
import { InputAdornment, MenuItem, TextField } from '@mui/material';
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
        <div className={styles.offerwall_container}>
            <div className={styles.offerwall_heading}>
                <h1>Offerwall</h1>
            </div>
            <div className={styles.offer_filter_wrapper}>
                <p className={styles.offer_filter_wrapper_heading}>Filter your offer:</p>
                <div className={styles.offer_filter_field_wrapper}>
                    <FilledTextField fieldLabel={'Offer'} fieldID={'offer-field'} />
                    <SelectTextfield options={vertical} fieldID={"select-vertical-field"} fieldLabel={"Vertical"} />
                    <SelectTextfield options={vertical} fieldID={"select-convertion-type"} fieldLabel={"Convertion type"} />
                    <SearchField fieldID={"search-geo-search"} fieldLabel={"Geo Search"} />
                    <SelectTextfield options={vertical} fieldID={"select-platform"} fieldLabel={"Platforms"} />
                </div>
                <FilterButton />
                <OfferwallTable />
            </div>
            <div>
            </div>
        </div>
    )
}
