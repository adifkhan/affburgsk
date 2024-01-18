'use-client'

import * as React from 'react';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

type SearchInputProps = {
    options: string[];
    Placeholder: string;
}

export default function NativeSelect({ options, Placeholder }: SearchInputProps) {
    const [value, setValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };
    return (
        <>
            <Select
                fullWidth
                size='small'
                placeholder='pick an option'
                value={value}
                displayEmpty
                onChange={handleChange}
                // renderValue={(value) => {
                //     if (value.length === 0) {
                //         return <em>Placeholder</em>;
                //     }
                //     return value;
                // }}
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                    color: 'whitesmoke',
                    fontSize: 12,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ED7D31',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ED7D31',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ED7D31',
                    },
                    '& .MuiSelect-icon': {
                        color: 'lightgray',
                    },
                    backgroundColor: '#YourBackgroundColor',
                }}
            >
                <MenuItem
                    sx={{ fontSize: 12 }}
                    value="">
                    <em>{Placeholder}</em>
                </MenuItem>
                {
                    options.map((option, index) => <MenuItem sx={{ fontSize: 12 }} key={index} value={option}>{option}</MenuItem>)
                }
            </Select>
        </>
    );
}