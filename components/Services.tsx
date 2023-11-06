'use client'
import React, { useEffect } from 'react'
import styles from '@/styles/Services.module.css'
import { Service } from '@/types/models'
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { TbSeo } from 'react-icons/tb';
import { MdOutlineHighQuality } from 'react-icons/md';
import { GoDeviceDesktop } from 'react-icons/go';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services: Service[] = [
    {
        name: 'Web Development',
        details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        icon: <BiCodeAlt />
    },
    {
        name: 'App Development',
        details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        icon: <AiOutlineCodeSandbox />
    },
    {
        name: 'Search Engine Optimization',
        details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        icon: <TbSeo />
    },
    {
        name: 'Quality Assurance',
        details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        icon: <MdOutlineHighQuality />
    },
    {
        name: 'Advertisement',
        details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        icon: <BiCodeAlt />
    },
    {
        name: 'Software Development',
        details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        icon: <GoDeviceDesktop />
    }
]
export default function Services() {
    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //         gsap.from(".servicebox", {
    //             y: 300,
    //             opacity: 0,
    //             stagger: .3,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".servicecon",
    //                 start: "top 80%",
    //                 end: "top 40%",
    //                 scrub: 2,
    //             },
    //         });
    //     });
    //     return () => ctx.revert();
    // }, [])
    return (
        <div className={`${styles.service_container} servicecon`}>
            <span className={styles.service_heading}><h1>Our Services</h1></span>
            <div className={`${styles.service_wrapper} `}>
                {
                    services.map((service, index) =>
                        <div key={index} className={`${styles.service} servicebox`}>
                            <span>{service.icon}</span>
                            <h3 className={styles.service_name}>{service.name}</h3>
                            <p className={styles.service_details}>{service.details}</p>
                        </div>)
                }
            </div>
        </div>

    )
}
