import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { OutlinedInput, TextField } from '@mui/material';

const options = ['Option 1', 'Option 2'];

export default function NativeAutoComplete() {
    return (
        <>
            <Autocomplete
                fullWidth
                size='small'
                id="free-solo-demo"
                freeSolo
                options={options.map((option) => option)}
                renderInput={(params) => <TextField
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