'use client'
import React, { useEffect } from 'react'
import styles from '@/styles/Publishers.module.css';
import { SiIcon } from 'react-icons/si';
import { BsPersonHeart } from 'react-icons/bs';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Publisher() {
    // useEffect(() => {
    //     gsap.to(".pbc", {
    //         y: -300,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".pbc",
    //             start: "top 80%",
    //             end: 'top 50%',
    //             scrub: 2,
    //         },
    //     });
    //     gsap.to(".adbr", {
    //         x: -500,
    //         opacity: 0.5,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".pbc",
    //             start: "top 40%",
    //             end: "top 20%",
    //             scrub: 2,
    //         },
    //     });
    //     gsap.to(".adbl", {
    //         x: 500,
    //         opacity: 0.5,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".pbc",
    //             start: "top 40%",
    //             end: "top 20%",
    //             scrub: 2,
    //         },
    //     });
    // }, [])
    return (
        <div className={`${styles.advertisers_container} pbc`}>
            <div className={styles.advertisers_module}>
                <div className={`${styles.adv_right} adbr`}>
                    <span><BsPersonHeart /></span>
                    <h1 className={styles.adv_right_heading}>Hello, Publishers !</h1>
                    <p className={styles.adv_right_text}>Publishers realize <q className={styles.adv_right_text_quots}>Affburg</q> is different when they see our traffic quality and volume metrics. Our publishers are high volume experts in their marketing medium and it shows in the traffic quality and volume. If you are an Advertiser and would like to setup a winning pay for performance campaign with <q className={styles.adv_right_text_quots}>Affburg</q>.</p>
                    <button>Find more Options</button>
                </div>
                <div className={`${styles.adv_left} adbl`}>
                    <span className={styles.adv_left_icon}><SiIcon /></span>
                    <span className={styles.adv_left_text}>How we make more growth with </span><span className={styles.strong_word_left}>advertisement</span>
                </div>
            </div>
        </div>
    )
}
