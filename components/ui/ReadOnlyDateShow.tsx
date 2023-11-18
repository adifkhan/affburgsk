import React from 'react'
import { TextField, } from '@mui/material';

type DatePropsType = {
    label: string;
    value: any;
}

export default function ReadOnlyDateShow({ label, value }: DatePropsType) {
    return (
        <>
            <TextField
                label={label}
                variant="filled"
                fullWidth
                value={value}
                focused
                InputProps={{ readOnly: true, disableUnderline: true }}
                sx={{
                    "& .MuiFilledInput-root": {
                        maxHeight: '45px',
                        backgroundColor: "#1c2437",
                        color: 'lightGrey',
                        border: '1px solid #ED7D31',
                        borderRadius: '3px',
                        fontSize: '.7rem',
                        '&:hover': {
                            backgroundColor: "#131926",
                        },
                    },
                    "& .MuiSvgIcon-root": {
                        color: "orange"
                    },
                    '& label': {
                        color: 'whiteSmoke',
                        fontSize: '.8rem',
                        '&.Mui-focused': {
                            color: 'whiteSmoke',
                        },
                    },
                }}
            /></>
    )
}
