'use client'
import { navLinks } from '@/types/models';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { SiIcon } from 'react-icons/si';
import { TbHomeInfinity } from 'react-icons/tb';
import { AiOutlineNodeIndex } from 'react-icons/ai';
import { MdConnectWithoutContact } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { GiBookStorm } from 'react-icons/gi';
import { HiMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { FiLogIn } from 'react-icons/fi';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(true);
    const [user, setUser] = useState<boolean>(true);

    const pathname = usePathname();
    const router = useRouter();
    // const [pathname, setPathname] = useState<string>('');
    const navLinks: navLinks[] = [
        {
            title: 'Home',
            path: '/',
            icon: <TbHomeInfinity />
        },
        {
            title: 'About Us',
            path: '/#aboutUs',
            icon: <AiOutlineNodeIndex />
        },

        {
            title: 'Blogs',
            path: '/#blogs',
            icon: <GiBookStorm />
        },
        {
            title: 'Contact',
            path: '/#contact',
            icon: <MdConnectWithoutContact />
        },
    ]
    return (
        <header className={styles.navbar_container}>
            {/* dropdown navbar */}
            <button
                className={styles.dropDown_menu_btn}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {!menuOpen ?
                    <span className={styles.dropDown_menu_icon_cross}>< RxCross2 /></span>
                    :
                    <span className={styles.dropDown_menu_icon_menu}>< HiMenu /></span>
                }
            </button>

            {/* main navbar start */}
            <div className={styles.branding_module}>
                <Link className={styles.brand_link} href='/'><span className={styles.brand_icon}><SiIcon /></span> Affburg</Link>
            </div>
            <div className={styles.navMenu_module}>
                <div className={menuOpen ? styles.nev_links_together : styles.dropDown_visible}>
                    {navLinks.map((item, index) =>
                        <Link
                            href={item.path}
                            key={index}
                            className={pathname === item.path ? styles.single__navlink : styles.single_navlink_deactive}
                        >
                            <span className={pathname === item.path ? styles.navlink_icon_big : styles.navlink_icon}>{item.icon}</span>
                            <span className={pathname === item.path ? styles.navlink_text_hidden : styles.navlink_text}>{item.title}</span>
                        </Link>
                    )}
                </div>
                <div className={styles.nav_right_section}>
                    {user && <button onClick={() => router.push('/dashboard')} className={styles.dashboard_btn}>Dashboard</button>}
                    <button onClick={() => router.push('/signin')} className={styles.login_button}><span className={styles.login_logo}><FiLogIn /></span>Log In</button>
                </div>
            </div>
        </header>
    )
}
