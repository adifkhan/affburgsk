import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';

type SearchInputProps = {
    placeholder: string;
    options: string[];
    defaultValue: string;
}
export default function NativeAutoComplete({ placeholder, options, defaultValue }: SearchInputProps) {
    return (
        <>
            <Autocomplete
                fullWidth
                size='small'
                id="free-solo-demo"
                freeSolo
                defaultValue={defaultValue}
                options={options}
                renderInput={(params) => <TextField
                    placeholder={placeholder}
                    {...params}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            color: 'whitesmoke',
                            fontSize: 12,
                            '& fieldset': {
                                borderColor: '#ED7D31',
                            },
                            '&:hover fieldset': {
                                borderColor: '#ED7D31',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ED7D31',
                            },
                        },
                        '& .MuiAutocomplete-clearIndicator': {
                            color: 'white',
                        },
                    }}
                />}
            />
        </>
    );
}