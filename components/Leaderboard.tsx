'use client'
import React, { useEffect } from 'react'
import styles from '@/styles/Leaderboard.module.css'
import dashboard from '../public/dashboard.png';
import Image from 'next/image';
import { SiIcon } from 'react-icons/si';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Leaderboard() {
    // useEffect(() => {
    //     gsap.to(".leaderboard", {
    //         y: -300,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".leaderboard",
    //             start: "top 100%",
    //             end: 'top 80%',
    //             scrub: 2
    //         },
    //     });
    //     let ctx = gsap.context(() => {
    //         gsap.from(".leadl", {
    //             x: -400,
    //             opacity: 0.5,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".leaderboard",
    //                 start: "top 95%",
    //                 end: "top 40%",
    //                 scrub: 2,
    //             },
    //         });
    //         gsap.from(".leadr", {
    //             x: 400,
    //             opacity: 0.5,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".leaderboard",
    //                 start: "top 95%",
    //                 end: "top 40%",
    //                 scrub: 2,
    //             },
    //         });
    //     });
    //     return () => ctx.revert();
    // }, [])
    return (
        <div className={`${styles.leaderboard_container} leaderboard`}>
            <div className={styles.leaderboard_module}>
                <div className={styles.layer}></div>
                <div className={styles.leaderboard_content}>
                    <div className={`${styles.leaderboard_content_left} leadl`}>
                        <span className={styles.leaderboard_content_left_icon}><SiIcon /></span>
                        <h1 className={styles.apply_module_text}>Apply today to become a part of  <q className={styles.q_text}> Affburg </q></h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora at nostrum tenetur neque totam perspiciatis.</p>
                        <h3>we do <span className={styles.ser}>Affburg</span></h3>
                        <button><span className={styles.button_icon}><SiIcon />Apply Today</span></button>
                    </div>
                    <div className={`${styles.leaderboard_content_right} leadr`}>
                        <Image className={styles.leaderboard_content_right_image} src={dashboard} height={250} width={250} alt='dashboard' />
                        <h1><q>Affburg Dev</q> gives you a friendly Leaderboard to control all things.</h1>
                    </div>
                </div>
            </div>
        </div >
    )
}
