'use client'

import React, { useState } from 'react'
import styles from '@/styles/SignIn.module.css';
import { SiIcon } from 'react-icons/si';
import { Box } from '@mui/material';
import { FaUserTie } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import EmailInput from '@/components/ui/EmailInput';
import PasswordInput from '@/components/ui/PasswordInput';


type SignInInputTypes = {
    email: string
    password: string
}
export default function SignIn() {
    const [passShow, setPassShow] = useState<boolean>(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignInInputTypes>();

    const onSubmit: SubmitHandler<SignInInputTypes> = (data) => console.log(data);
    // console.log(watch("email"));

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
                    <Box component={'form'}
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.form_right}>
                        <div className={styles.form_first_section}>
                            <EmailInput
                                errors={errors}
                                register={register}
                                label={'Email'}
                                fieldID={'email'}
                                message='Email is required'
                            />
                            <div className={styles.password_field}>
                                <PasswordInput
                                    passShow={passShow}
                                    register={register}
                                    errors={errors}
                                    setPassShow={setPassShow}
                                />
                                <p className={styles.forgetPass_text}>Forget Password?</p>
                            </div>

                            <button type='submit'>Log in</button>
                        </div>
                    </Box>
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
