import { FormControl, OutlinedInput, Typography } from '@mui/material'
import React from 'react'

type InputProps = {
    defaultValue: string;
    helperText: string;
    placeholder: string;
}

export default function NativeTextInput({ defaultValue, helperText, placeholder }: InputProps) {
    return (
        <>
            <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'column', gap: .5 }}>
                <OutlinedInput
                    size='small'
                    defaultValue={defaultValue}
                    placeholder={placeholder}
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
                    }}
                />
                <Typography variant='body2' sx={{ fontSize: 11, color: 'lightGray' }}>{helperText}</Typography>
            </FormControl>
        </>
    )
}
