import React from 'react'
import { MenuItem, TextField } from '@mui/material';

type SelectProps = {
    options: any;
    fieldID: string;
    fieldLabel: string;

}
export default function SelectTextfield({ options, fieldID, fieldLabel }: SelectProps) {
    return (
        <>
            <TextField
                id={fieldID}
                select
                label={fieldLabel}
                defaultValue="ALL"
                // helperText="Please select your currency"
                variant="filled"
                fullWidth
                // size='small'
                InputProps={{ disableUnderline: true }}
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
                            // color: 'WhiteSmoke',
                            // border: '1px solid #ED7D31',
                            // "& .MuiSvgIcon-root": {
                            //     color: "orange"
                            // }
                        },
                        "&.Mui-focused": {
                            backgroundColor: "#131926",
                            // color: 'WhiteSmoke',
                            // border: '1px solid #ED7D31',
                            // "& .MuiSvgIcon-root": {
                            //     color: "orange"
                            // },
                        },
                    },
                    "& .MuiSvgIcon-root": {
                        color: "orange"
                    },
                    '& label': {
                        color: 'whiteSmoke',
                        '&.Mui-focused': {
                            color: 'whiteSmoke',
                        },
                    },
                    // '&:hover label': {
                    //     color: 'white',
                    // },
                }}
            >
                {options.map((option: any) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </>
    )
}
