'use client'
import React from 'react'
import styles from '@/styles/WhyAffburg.module.css'
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { TbSeo } from 'react-icons/tb';
import { MdOutlineHighQuality } from 'react-icons/md';
import { GoDeviceDesktop } from 'react-icons/go';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function WhyAffburg() {
    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //         gsap.from(".affburgContainer", {
    //             y: 300,
    //             opacity: 0,
    //             stagger: .3,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".affburgContainer",
    //                 start: "top 80%",
    //                 end: "top 40%",
    //                 scrub: 2,
    //             },
    //         });
    //     });
    //     return () => ctx.revert();
    // }, [])
    return (
        <div className={`${styles.affburg_container} affburgContainer`}>
            <div className={styles.affburg_wrapper}>
                <span className={styles.affburg_heading}><h1>Why affburg</h1></span>
            </div>
        </div>

    )
}
