'use client'
import React, { useEffect } from 'react'
import styles from '@/styles/Reviews.module.css';
import { TextField } from '@mui/material';
import { LuMessagesSquare } from 'react-icons/lu';
import { LiaTelegramPlane } from 'react-icons/lia';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //         gsap.from(".contact", {
    //             x: -400,
    //             opacity: 0.5,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".review",
    //                 start: "top 75%",
    //                 end: "top 40%",
    //                 scrub: 2,
    //             },
    //         });
    //         gsap.from(".contactform", {
    //             x: 400,
    //             opacity: 0.5,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".review",
    //                 start: "top 75%",
    //                 end: "top 40%",
    //                 scrub: 2,
    //             },
    //         });
    //     });
    //     return () => ctx.revert();

    // }, [])
    return (
        <div id='contact' className={`${styles.review_container} review`}>
            <div className={`${styles.review_left} contact`}>
                <span className={styles.review_logo}><LuMessagesSquare /></span>
                <h2 className={styles.review_text_heading}>Need to contact someone at <q>Affburg</q> ?</h2>
                <p className={styles.review_text_details}>Please complete the form below & someone will be in contact with you as soon as possible.
                </p>
            </div>
            <form className={`${styles.review_right} contactform`}>
                <div className={styles.form_first_section}>
                    <TextField
                        size='medium'
                        type='text'
                        required
                        fullWidth
                        label="Name"
                        id="fullWidth"
                        placeholder='your name'
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
                    />
                    <TextField
                        size='medium'
                        type='email'
                        required
                        fullWidth
                        label="Email"
                        id="fullWidth"
                        placeholder='your email'
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
                    />
                </div>
                <div className={styles.form_second_section}>
                    <TextField
                        size='medium'
                        type='text'
                        required
                        fullWidth
                        label="Company"
                        id="fullWidth"
                        placeholder='your company name'
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
                    />
                    <TextField
                        size='medium'
                        type='text'
                        required
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={3}
                        fullWidth
                        placeholder='enter your text here ...'
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
                    />
                    <button type='submit'><span><LiaTelegramPlane /></span>Submit</button>
                </div>
            </form>
        </div >
    )
}
