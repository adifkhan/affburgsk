'use client'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#00052D',
            light: '#ec008c',
            dark: '#85004f',
            contrastText: '#85004f',
        },
        secondary: {
            main: '#ff3baf',
            light: '#ffeaf7',
            dark: '#333333'
        },
    },

    components: {

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: '#3E68A8',
                    },
                    '& label.Mui-focused': {
                        color: '#3E68A8',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#3E68A8',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#3E68A8',
                        },
                        '&:hover fieldset': {
                            borderColor: '#3E68A8',
                            borderWidth: '0.15rem',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3E68A8',
                        },
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: 'initial',
                    fontSize: '1rem',
                },
            },
        },
    },
});

export default theme;