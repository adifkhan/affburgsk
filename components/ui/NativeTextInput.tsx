import { FormControl, OutlinedInput, TextField, Typography } from '@mui/material'
import React from 'react'

type InputProps = {
    defaultValue: string;
    helperText: string;
    placeholder: string;
}

export default function NativeTextInput({ defaultValue, helperText, placeholder }: InputProps) {
    return (
        <>
            <FormControl fullWidth sx={{ display: 'flex', color: 'whitesmoke', flexDirection: 'column', gap: .5 }}>
                <TextField
                    size='small'
                    defaultValue={defaultValue}
                    placeholder={placeholder}
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
                    }}
                />
                <Typography variant='body2' sx={{ fontSize: 11, color: 'lightGray' }}>{helperText}</Typography>
            </FormControl>
        </>
    )
}
