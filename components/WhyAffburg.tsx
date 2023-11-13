'use client'
import React from 'react'
import styles from '@/styles/WhyAffburg.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RxDotFilled } from 'react-icons/rx';
import { LuShieldQuestion } from 'react-icons/lu';
import Image from 'next/image';
import affburgImage from '../public/affburg.png';
import { TbCircleDashedNumber1, TbCircleDashedNumber2 } from 'react-icons/tb';

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
            <div className={styles.layer}></div>
            <div className={styles.affburg_content}>
                <div className={styles.affburg_info_module}>
                    <h1 className={styles.affburg_heading}><span><LuShieldQuestion /></span>Why <q>affburg</q></h1>
                    <div className={styles.affburg_infos}>
                        <span className={styles.affburg_info_details}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt reprehenderit saepe. Assumenda exercitationem obcaecati veritatis fugit maiores qui dolorum velit facere ipsum consequatur pariatur blanditiis dolore dolorem, rerum aut culpa quae distinctio! Corrupti dolorum aliquid ipsam quia architecto asperiores aut amet eaque enim, odit unde ex libero sint quam!</span>
                        <span className={styles.affburg_info}><TbCircleDashedNumber1 color='#ED7D31' />Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
                        <span className={styles.affburg_info}><TbCircleDashedNumber2 color='#ED7D31' />Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
                    </div>
                </div>
                <div className={styles.affburg_image_portion}>
                    <Image className={styles.adv_left_image} height={500} width={500} alt='ads' src={affburgImage}></Image>
                </div>
            </div>
        </div >
    )
}
