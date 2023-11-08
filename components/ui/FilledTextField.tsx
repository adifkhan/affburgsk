import { TextField } from '@mui/material'
import React from 'react'


type TextFieldProps = {
    fieldID: string;
    fieldLabel: string;

}
export default function FilledTextField({ fieldID, fieldLabel }: TextFieldProps) {
    return (
        <>
            <TextField
                id={fieldID}
                label={fieldLabel}
                // defaultValue="ALL"
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
                        // "&.Mui-focused": {
                        //     backgroundColor: "#1c2437",
                        //     color: 'WhiteSmoke',
                        //     border: '1px solid #ED7D31',
                        //     "& .MuiSvgIcon-root": {
                        //         color: "orange"
                        //     },
                        // },
                    },
                    "& .MuiSvgIcon-root": {
                        color: "orange"
                    },
                    '& label': {
                        color: 'whiteSmoke',
                        fontSize: '.7rem',
                        '&.Mui-focused': {
                            color: 'whiteSmoke',
                        },
                    },
                    // '&:hover label': {
                    //     color: 'white',
                    // },
                }}
            />
        </>
    )
}
