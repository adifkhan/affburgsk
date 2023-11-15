import React from 'react'
import { TextField, Box } from '@mui/material';
import styles from '@/styles/SignIn.module.css'

type TextPropsType = {
    type: string;
    register: any
    errors: any;
    label: string;
    fieldID: string;
    placeholder: string;
}
export default function TextInput({ type, errors, register, label, fieldID, placeholder }: TextPropsType) {
    return (
        <>
            <Box component={"div"} sx={{ width: '100%' }}>
                <TextField
                    required
                    variant='outlined'
                    fullWidth
                    autoComplete="off"
                    size='small'
                    type={type}
                    label={label}
                    id={fieldID}
                    placeholder={placeholder}
                    {...register(fieldID,
                        {
                            required: {
                                value: true,
                                message: `${label} is required`,
                            }
                        })}
                    sx={{
                        '& .MuiFormLabel-root': {
                            fontSize: { xs: '.7rem', md: '.8rem' },
                            fontWeight: 600,
                        },
                        '& label.Mui-focused': {
                            color: '#1c2437',
                        },
                        '& .MuiOutlinedInput-root': {
                            fontSize: 14,
                            height: { xs: 35, md: 40 },
                            backgroundColor: '#ebebeb',
                            '&.Mui-focused fieldset': {
                                borderColor: '#2a3064',
                                borderWidth: '2px'
                            },
                            '& fieldset span': {
                                paddingRight: '6px',
                            },
                            '&.Mui-focused fieldset span': {
                                paddingRight: '6px',
                            },
                        },
                    }} />
                <label className={styles.validate_label}>
                    {errors[fieldID]?.type === 'required' && <span>{errors[fieldID].message}</span>}
                </label>
            </Box>
        </>
    )
}
