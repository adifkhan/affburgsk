import React from 'react'
import { TextField, Box } from '@mui/material';
import styles from '@/styles/SignIn.module.css'

type EmailPropsType = {
    register: any;
    errors: any;
    label: string;
    emailError: string;
    validateConfirmEmail: any;
}
export default function ConfirmEmailInput({ register, errors, label, validateConfirmEmail }: EmailPropsType) {
    return (
        <>
            <Box component={"div"} sx={{ width: '100%' }}>
                <TextField
                    fullWidth
                    autoComplete="off"
                    size='small'
                    type='email'
                    label={label}
                    placeholder='your email'
                    {...register('confirmEmail',
                        {
                            required: {
                                value: true,
                                message: 'Confirm email is required',
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Invalid email input'
                            },
                            validate: (value: any) => validateConfirmEmail(value),
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
                            fontSize: { xs: 12, md: 14 },
                            backgroundColor: '#ebebeb',
                            height: { xs: 35, md: 40 },
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
                    }}
                // onChange={e => console.log(e.target.value)}
                />
                <label className={styles.validate_label} htmlFor="email">
                    {errors.confirmEmail && <p>{errors.confirmEmail.message}</p>}
                    {/* {errors[fieldID]?.type === 'required' && <span>{errors[fieldID].message}</span>}
                    {errors[fieldID]?.type === 'pattern' && <span>{errors[fieldID].message}</span>}
                    {errors[fieldID]?.type === 'notmatched' && <span>{errors[fieldID].message}</span>} */}
                </label>
            </Box>
        </>
    )
}
