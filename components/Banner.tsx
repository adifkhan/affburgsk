'use client'
import React, { useEffect } from 'react'
import styles from '@/styles/Banner.module.css';
import { SiIcon } from 'react-icons/si';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from 'next/navigation';
gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
    const router = useRouter();
    // useEffect(() => {
    //     gsap.to(".banner_logo", {
    //         x: -400,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".banner_logo",
    //             start: "center 50%",
    //             end: "center 20%",
    //             scrub: 2,
    //             // markers: true
    //         },
    //     });
    //     gsap.to(".banner_content", {
    //         x: 500,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".banner_logo",
    //             start: "center 45%",
    //             end: "center 30%",
    //             scrub: 3,
    //         },
    //     });
    // }, [])

    return (
        <div className={styles.banner_container}>
            <div className={`${styles.banner_left} banner_logo`}>
                <div className={styles.outer_circle}>
                    <div className={styles.inner_circle}>
                        <span className={styles.banner_logo}><SiIcon /></span>
                    </div>
                </div>
                <span className={styles.banner_logo_name}>Affburg</span>
            </div>
            <div className={`${styles.banner_right} banner_content`}>
                <div className={styles.banner_right_content}>
                    <h1><strong className={styles.strong_words}>Affburg</strong> makes you more comfortable with your <strong className={styles.strong_words}>business</strong> plus technology.</h1>
                    <h3>Take your business to the next level</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum sint consequuntur eveniet! Id quidem dicta dignissimos vel, commodi repellat, numquam explicabo officiis cupiditate consequatur voluptates? Omnis libero tempore ab ea.</p>
                    <button onClick={() => router.push('/moreAboutUs')} className={styles.banner_right_btn}>More About Us</button>
                </div>
            </div>
        </div>
    )
}
