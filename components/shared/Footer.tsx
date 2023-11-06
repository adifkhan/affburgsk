import React from 'react'
import styles from '@/styles/Footer.module.css'
import { SiConsul, SiContentful, SiIconfinder } from 'react-icons/si';
import { GiConcentrationOrb, GiContortionist } from 'react-icons/gi';
import { TfiThemifyFavicon } from 'react-icons/tfi';
import { SiIcon } from 'react-icons/si';
import Link from 'next/link';
import { BsGlobe2 } from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer_container}>
            <div className={styles.layer}></div>
            <div className={styles.footer_wrapper}>
                <div className={styles.partners_module}>
                    <div className={styles.partner_module_text}>
                        <h2>Our partners</h2>
                    </div>
                    <div className={styles.partner_icon_modules}>
                        <span className={styles.partners_icon}><GiConcentrationOrb /></span>
                        <span className={styles.partners_icon}><GiContortionist /></span>
                        <span className={styles.partners_icon}><SiConsul /></span>
                        <span className={styles.partners_icon}><SiIconfinder /></span>
                        <span className={styles.partners_icon}><SiContentful /></span>
                        <span className={styles.partners_icon}><TfiThemifyFavicon /></span>
                    </div>
                    <div className={ styles.footer_contact_address}>
                        <div className='flex flex-col'>
                            <span className='flex'><strong className='mr-3'>Address:</strong> Shankar, Dhanmondi, Dhaka, 1209</span>
                            <span className='flex'><strong className='mr-3'>Email:</strong>abc@company.com</span>
                            <span className='flex'><strong className='mr-3'>Emergency:</strong>+0921054888</span>
                            <span className='flex'><strong className='mr-3'>Web site:</strong>Affburg.uk</span>
                        </div>
                        <span className='text-3xl xs:text-md flex gap-2 items-center'><SiIcon />Affburg</span>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.footer_info_module_container}>
                    <div className={styles.footer_info_module}>
                        <div>
                            <h2 className={styles.footer_info_heading}>Our services</h2>
                            <ul className='mt-5 flex flex-col gap-2'>
                                <li>Advertisement</li>
                                <li>Hosting</li>
                                <li>Marketing</li>
                                <li>SEO</li>
                                <li>Boosting</li>
                                <li>Web Development</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={styles.footer_info_heading}> Locations</h2>
                            <ul className='mt-5 flex flex-col gap-2'>
                                <li>London</li>
                                <li>United State</li>
                                <li>Dhaka</li>
                                <li>Chottogram</li>
                                <li>Dhanmondi</li>
                                <li>Uttora</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={styles.footer_info_heading}>Beloved Clients</h2>
                            <ul className='mt-5 flex flex-col gap-2'>
                                <li>Sheba Epo</li>
                                <li>United Pillo</li>
                                <li>Jaber Tex</li>
                                <li>Too Looks</li>
                                <li>Handi</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.social_links}>
                        <span className={styles.single_social_link}><Link href={'#'}><BsGlobe2 /></Link></span>
                        <span className={styles.single_social_link}><Link href={'#'}><FaFacebookSquare /></Link></span>
                        <span className={styles.single_social_link}><Link href={'#'}><FaLinkedinIn /></Link></span>
                        <span className={styles.single_social_link}><Link href={'#'}><BiLogoInstagramAlt /></Link></span>
                        <span className={styles.single_social_link}><Link href={'#'}><FaSquareTwitter /></Link></span>
                    </div>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                Lorem ipsum dolor sit amet. Affburg © {currentYear} <span>Tolon73</span>
            </div>
        </footer>
    )
}
