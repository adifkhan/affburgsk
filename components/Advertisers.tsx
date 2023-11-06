'use client'
import React, { useEffect } from 'react'
import styles from '@/styles/Advertisers.module.css';
import { RiVidicon2Fill } from 'react-icons/ri';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import adsPerson from '../public/person (3).png';
import { BsArrowRight, BsChatRightQuote, BsQuote } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

export default function Advertisers() {
    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //         gsap.from(".advlf", {
    //             scale: 0,
    //             opacity: 0,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".advertise",
    //                 start: "top 80%",
    //                 end: "top 50%",
    //                 scrub: 2,
    //             },
    //         });
    //         gsap.from(".advbtn", {
    //             x: 300,
    //             opacity: 0,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".advertise",
    //                 start: "top 30%",
    //                 end: "top 45%",
    //                 scrub: 2,
    //             },
    //         });
    //     });
    //     return () => ctx.revert();
    // }, [])
    return (
        <div className={`${styles.advertisers_container} advertise`}>
            <div className={styles.advertisers_module}>
                <div className={`${styles.adv_left} advlf`}>
                    <div className={styles.image_back_portion}></div>
                    <Image className={styles.adv_left_image} height={500} width={500} alt='ads' src={adsPerson}></Image>
                </div>
                <div className={styles.adv_right}>
                    <span><RiVidicon2Fill /></span>
                    <h1 className={styles.adv_right_heading}>Hello, Advertisers !</h1>
                    <div className={styles.adv_right_text}>
                        <span className={styles.quots_icon}><BsChatRightQuote /></span>
                        <p>Advertisers realize Affburg is different when they see our traffic quality and volume metrics. Our publishers are high volume experts in their marketing medium and it shows in the traffic quality and volume. If you are an Advertiser and would like to setup a winning pay for performance campaign with Affburg.</p>
                    </div>
                    {/* <div className={styles.adv_right_point_text}>
                        <div className={styles.adv_right_point_text_single}>
                            <span><BsArrowRight /></span>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        </div>
                    </div> */}
                    <button className='advbtn'>Find more Options</button>
                </div>
            </div>
        </div>
    )
}
