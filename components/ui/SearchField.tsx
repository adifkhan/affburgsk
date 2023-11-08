import React from 'react'
import { InputAdornment, TextField } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';


type SearchProps = {
    fieldID: string;
    fieldLabel: string;
}

export default function SearchField({ fieldID, fieldLabel }: SearchProps) {
    return (
        <>
            <TextField
                id={fieldID}
                label={fieldLabel}
                type="search"
                variant="filled"
                fullWidth
                // size='small'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            < AiOutlineSearch color='grey' size={15} />
                        </InputAdornment>
                    ),
                    disableUnderline: true
                }}
                sx={{
                    "& .MuiFilledInput-root": {
                        maxHeight: '45px',
                        backgroundColor: "#1c2437",
                        color: 'lightGrey',
                        border: '1px solid #ED7D31',
                        borderRadius: '3px',
                        fontSize: '.7rem',
                        "&.Mui-focused": {
                            color: 'whiteSmoke',
                            border: '1px solid #ED7D31'
                        },
                        '&:hover': {
                            backgroundColor: '#131926',
                        },
                    },
                    '& label.Mui-focused': {
                        color: 'whiteSmoke',
                    },
                    '& label': {
                        color: 'whiteSmoke',
                    },
                }}
            />
        </>
    )
}
