'use client'
import React, { useEffect } from 'react';
import styles from '@/styles/AdsSocial.module.css';
import { SlSocialDropbox } from 'react-icons/sl';
import Image from 'next/image';
import social from '../public/social.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AdsSocial() {
    // useEffect(() => {
    //     // gsap.to(".social", {
    //     //     y: -300,
    //     //     ease: "none",
    //     //     scrollTrigger: {
    //     //         trigger: ".social",
    //     //         start: "top 100%",
    //     //         end: 'top 80%',
    //     //         scrub: 2
    //     //     },
    //     // });
    //     let ctx = gsap.context(() => {
    //         gsap.from(".sic", {
    //             x: -400,
    //             opacity: 0.5,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".social",
    //                 start: "top 60%",
    //                 end: "top 10%",
    //                 scrub: 2,
    //             },
    //         });
    //         gsap.from(".sit", {
    //             scale: 0,
    //             opacity: 0,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".social",
    //                 start: "top 60%",
    //                 end: "top 10%",
    //                 scrub: 2,
    //             },
    //         });
    //     });
    //     return () => ctx.revert();
    // }, [])
    return (
        <div id='aboutUs' className={`${styles.social_container} social`}>
            <div className={styles.layer}></div>
            <div className={styles.social_info}>
                <div className={`${styles.social_info_contents} sic`}>
                    <span className={styles.signup_text_logo}><SlSocialDropbox /></span>
                    <h1 className={styles.social_text}>Do you make sounds good in the entire World? Stay with <q className='font-semibold'>Silicon</q> to make your business more efficient.</h1>
                    <h2 className={styles.adventages_heading}>Adventages:</h2>
                    <h2 className={styles.adventages_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a praesentium unde aspernatur quo? Enim natus unde eos earum vero illum mollitia dolores blanditiis rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt non error exercitationem nulla doloribus?</h2>
                    <button>Know More about our SEO</button>
                </div>
                <div className={`${styles.social_image_tag} sit`}>
                    <Image className={styles.social_img} src={social} height={350} width={350} alt='social'></Image>
                </div>
            </div>
        </div>
    )
}
