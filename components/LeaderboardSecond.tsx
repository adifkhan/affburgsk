'use client'
import React, { useEffect } from 'react'
import styles from '@/styles/LeaderboardSecond.module.css'
import Image from 'next/image'
import { SiIcon } from 'react-icons/si'
import man from '../public/man.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LeaderboardSecond() {
    // useEffect(() => {
    //     gsap.to(".leaderbrd2", {
    //         y: -300,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".leaderbrd2",
    //             start: "top 70%",
    //             end: 'top 40%',
    //             scrub: 2
    //         },
    //     });
    //     let ctx = gsap.context(() => {
    //         gsap.from(".lead2r", {
    //             scale: 0,
    //             opacity: 0,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".leaderbrd2",
    //                 start: "top 80%",
    //                 end: "top 50%",
    //                 scrub: 2,
    //             },
    //         });
    //         gsap.from(".lead2l", {
    //             y: 300,
    //             opacity: 0,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".leaderbrd2",
    //                 start: "top 70%",
    //                 end: "top 60%",
    //                 scrub: 2,
    //             },
    //         });
    //     });
    //     return () => ctx.revert();
    // }, [])
    return (
        <div className={`${styles.leaderboard_container} leaderbrd2`}>
            <div className={styles.leaderboard_module}>
                <div className={styles.layer}></div>
                <div className={styles.leaderboard_content}>
                    <div className={`${styles.leaderboard_content_right} lead2r`}>
                        <Image src={man} height={200} width={200} alt='dashboard' />
                        <h1><q>Affburg Dev</q> gives you a friendly <q>Leaderboard</q> to control all things.</h1>
                    </div>
                    <div className={`${styles.leaderboard_content_left} lead2l`}>
                        <span className={styles.leaderboard_content_left_icon}><SiIcon /></span>
                        <h1 className={styles.apply_module_text}>Apply today to become a great Business leader and grow with <q className={styles.q_text}> Affburg </q></h1>
                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, placeat corrupti. Iure temporibus sapiente sequi?Lorem ipsum dolor sit amet.</h3>
                        <p className={styles.leaderboard_content_left_light}>Your next level business</p>
                        <button><span className={styles.button_icon}><SiIcon />Apply Today</span></button>
                    </div>

                </div>
            </div>
        </div >
    )
}
