import * as React from 'react';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

type SearchInputProps = {
    options: string[];
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
}
export default function NativeSelect({ options, value, setValue }: SearchInputProps) {

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };
    return (
        <>
            <Select
                fullWidth
                size='small'
                value={value}
                // displayEmpty
                onChange={handleChange}
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
                {
                    options.map((option, index) => <MenuItem sx={{ fontSize: 12 }} key={index} value={option}>{option}</MenuItem>)
                }
            </Select>
        </>
    );
}