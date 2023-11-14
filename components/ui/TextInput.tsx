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
                            fontSize: '.8rem',
                        },
                        '& label.Mui-focused': {
                            color: '#1c2437',
                        },
                        '& .MuiOutlinedInput-root': {
                            fontSize: 14,
                            '&.Mui-focused fieldset': {
                                borderColor: '#1c2437',
                                borderWidth: '1px'
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
