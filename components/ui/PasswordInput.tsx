import { TextField } from '@mui/material'
import React, { Dispatch } from 'react'
import { BiHide, BiShowAlt } from 'react-icons/bi'
import styles from '@/styles/SignIn.module.css'

type PasswordProps = {
    register: any;
    setPassShow: Dispatch<React.SetStateAction<boolean>>;
    passShow: boolean;
    errors: any;

}

export default function PasswordInput({ passShow, setPassShow, register, errors }: PasswordProps) {
    return (
        <>
            <TextField
                required
                fullWidth
                autoComplete="off"
                label="Password"
                size='small'
                id='password'
                type={!passShow ? 'password' : 'text'}
                placeholder='your password'
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
                }}
                {...register("password",
                    {
                        required: {
                            value: true,
                            message: "Password is required",
                        },
                        pattern: {
                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, message: 'Pattern follow "Abcd123@"'
                        }
                    })}
            />
            <span
                className={styles.pass_eye}
                onClick={() => setPassShow(!passShow)}
            >{passShow ? <BiShowAlt size={16} /> : <BiHide size={16} />}</span>
            <label className={styles.validate_label} htmlFor="password">
                {errors.password?.type === 'required' && <span>{errors.password.message}</span>}
                {errors.password?.type === 'pattern' && <span>{errors.password.message}</span>}
            </label>
        </>
    )
}
