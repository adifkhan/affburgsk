import React from 'react'
import { TextField, Box } from '@mui/material';
import styles from '@/styles/SignIn.module.css'

type EmailPropsType = {
    register: any;
    errors: any;
    label: string;
    fieldID: string;
}
export default function EmailInput({ register, errors, label, fieldID }: EmailPropsType) {
    return (
        <>
            <Box component={"div"} sx={{ width: '100%' }}>
                <TextField
                    required
                    fullWidth
                    autoComplete="off"
                    size='small'
                    type='email'
                    label={label}
                    id={fieldID}
                    placeholder='your email'
                    {...register("email",
                        {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Invalid email input'
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
                <label className={styles.validate_label} htmlFor="email">
                    {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span>{errors.email.message}</span>}
                </label>
            </Box>
        </>
    )
}
