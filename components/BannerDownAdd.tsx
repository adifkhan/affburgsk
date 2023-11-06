'use client'
import React, { useEffect } from 'react'
import { SiIcon } from 'react-icons/si'
import styles from '@/styles/BannerDownAdd.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BannerDownAdd() {
    // useEffect(() => {
    //     gsap.to(".banner_dw", {
    //         y: -300,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".banner_dw",
    //             start: "top 75%",
    //             end: 'top 50%',
    //             scrub: 2,
    //         },
    //     });
    // }, [])

    return (
        <div className={`${styles.banner_down} banner_dw`}>
            <div className={styles.layer}></div>
            <div className={styles.banner_down_info}>
                <h1 className={styles.apply_module_text}>Apply today to become a part of  <q className={styles.q_text}> Affburg </q></h1>
                <button><span className={styles.apply_btn_logo}><SiIcon /></span>Apply Today</button>
            </div>
        </div>
    )
}
