'use client'
import React, { useState } from 'react'
import styles from '@/styles/SignIn.module.css';
import { SiIcon } from 'react-icons/si';
import { TextField } from '@mui/material';
import Link from 'next/link';
import { FaUserTie } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { BiHide, BiShowAlt } from 'react-icons/bi';

export default function SignIn() {
    const [passShow, setPassShow] = useState<boolean>(false);
    const router = useRouter();
    return (
        <div className={styles.signin}>
            <div className={styles.signin_container}>
                <div className={styles.signin_text}>
                    <div className={styles.layer}></div>
                    <div className={styles.signin_text_info}>
                        <span className={styles.signin_text_logo}><SiIcon /></span>
                        <h2>Stay with <q className='font-semibold'>Affburg</q> to get all updated about new subscription updates.</h2>
                    </div>
                </div>
                <div className={styles.signin_form}>
                    <div className={styles.signin_heading}>
                        <span className={styles.signin_right_logo}><SiIcon /></span>
                        <h1 className={styles.signin_right_head_text}>Sign In with <q>Affburg</q></h1>
                    </div>
                    <form className={styles.form_right}>
                        <div className={styles.form_first_section}>
                            <TextField
                                sx={{
                                    '& label.Mui-focused': {
                                        color: '#00052D',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#00052D',
                                            borderWidth:'1px'
                                        },
                                        '& fieldset span': {
                                            paddingRight: '6px',
                                        },
                                        '&.Mui-focused fieldset span': {
                                            paddingRight: '6px',
                                        },
                                    },
                                }}
                                fullWidth
                                size='small'
                                type='email'
                                label="Email"
                                placeholder='your email' />
                            <div className={styles.password_field}>
                                <TextField
                                    sx={{
                                        '& label.Mui-focused': {
                                            color: '#00052D',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#00052D',
                                                borderWidth:'1px'
                                            },
                                            '& fieldset span': {
                                                paddingRight: '12px',
                                            },
                                            '&.Mui-focused fieldset span': {
                                                paddingRight: '12px',
                                            },
                                        },
                                    }}
                                    fullWidth
                                    size='small'
                                    type={!passShow ? 'password' : 'text'}
                                    label="Password"
                                    placeholder='your password' />
                                <span
                                    className={styles.pass_eye}
                                    onClick={() => setPassShow(!passShow)}
                                >{passShow ? <BiShowAlt size={20} /> : <BiHide size={20} />}</span>
                            </div>
                            <p className={styles.forgetPass_text}>Forget Password?</p>
                            <button type='submit'>Log In</button>
                        </div>
                    </form>
                    <div className={styles.signin_bottom_container}>
                        <div className={styles.signIn_bottom}>
                            <span className={styles.another_account_text}><strong>Do not have an account?</strong> Open one as:</span>
                            <button
                                onClick={() => router.push('/signup')}
                                className={styles.partner_btn}>
                                <span className={styles.partner_btn_logo}>
                                    <FaUserTie />
                                </span>Partner
                            </button>
                        </div>
                        <p>Need Help? <button onClick={() => router.push('/#contact')} className={styles.signin_bottom_contact}>Contact Support</button></p>
                    </div>
                </div>
            </div >
        </div >
    )
}
