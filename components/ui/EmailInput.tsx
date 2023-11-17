import React, { ChangeEventHandler } from 'react'
import { TextField, Box } from '@mui/material';
import styles from '@/styles/SignIn.module.css'

type EmailPropsType = {
    register: any;
    errors: any;
    label: string;
    fieldID: string;
    message: string;
    emailError: string;
}
export default function EmailInput({ register, errors, label, fieldID, message, emailError }: EmailPropsType) {
    return (
        <>
            <Box component={"div"} sx={{ width: '100%' }}>
                <TextField
                    fullWidth
                    autoComplete="off"
                    size='small'
                    type='email'
                    label={label}
                    id={fieldID}
                    message={message}
                    placeholder='your email'
                    {...register(fieldID,
                        {
                            required: {
                                value: true,
                                message: `${message}`,
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Invalid email input'
                            },
                            validate: (emailError: any) => {
                                return (
                                    emailError.length !== 0 && "Email didn't match........"
                                )
                            },
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
                    onChange={e => console.log(e.target.value)}
                />
                <label className={styles.validate_label} htmlFor="email">
                    {<span>{errors[fieldID]?.message}</span>}
                    {/* {errors[fieldID]?.type === 'required' && <span>{errors[fieldID].message}</span>}
                    {errors[fieldID]?.type === 'pattern' && <span>{errors[fieldID].message}</span>}
                    {errors[fieldID]?.type === 'notmatched' && <span>{errors[fieldID].message}</span>} */}
                </label>
            </Box>
        </>
    )
}
