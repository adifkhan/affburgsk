import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export default function TimePicker() {
    const currentDateTime = new Date();
    const currentTime = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileTimePicker
                sx={{
                    "& .MuiOutlinedInput-root": {
                        fontSize: 12,
                        height: 35,
                        color: '#3B3B3B',
                        backgroundColor: "#FFFFFF",

                        "& fieldset": {
                            border: "none",
                        },
                        "&:hover fieldset": {
                            border: "none"
                        },
                        "&.Mui-focused fieldset": {
                            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
                        },
                    },
                }}
                defaultValue={currentTime}
            />
        </LocalizationProvider>
    );
}
