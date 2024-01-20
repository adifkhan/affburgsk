import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'


type CheckboxProps = {
    label: string;
    handleOnChange: () => void;
}
export default function CheckBoxFilter({ label, handleOnChange }: CheckboxProps) {
    return (
        <>
            <FormControlLabel
                onChange={handleOnChange}
                sx={{
                    '& .MuiFormControlLabel-label': {
                        fontSize: { xs: '.7rem', sm: '.8rem' },
                    }
                }}
                control={<Checkbox
                    size='small'
                    sx={{
                        color: 'lightgrey',
                        '&.Mui-checked': {
                            color: '#ED7D31',
                        },
                    }}
                />}
                label={label} />
        </>
    )
}
