import React, { Dispatch, SetStateAction } from 'react';
import styles from '@/styles/Dashboard/Sidebar.module.css'
import tiggzy from '../../public/toggzy.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineRight, AiOutlineSkype, AiOutlineUser } from 'react-icons/ai';
import { HiLink, HiOutlineDocumentReport, HiOutlineMail } from 'react-icons/hi';
import { PiPaperPlaneTiltLight } from 'react-icons/pi';
import { TbHomeDot, TbNavigationDiscount, TbProgressHelp, TbReport } from 'react-icons/tb';
import { BiLogOutCircle } from 'react-icons/bi';
import { BsQuestionDiamond, BsSpeedometer2 } from 'react-icons/bs';
import { DashboardMenuType } from '@/types/models';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { MdOutlinePayments } from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import { AppDispatch, useAppSelector } from '@/app/GlobalRedux/store';
import { useDispatch } from 'react-redux';


type SidebarProps = {
    children: React.ReactNode;
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    // themeDark: string | null;
    // setThemeDark: Dispatch<SetStateAction<string | null>>;
    reportsDropDownMenu: boolean;
    setReportDropDownMenu: Dispatch<SetStateAction<boolean>>;
    fqaDropDownMenu: boolean;
    setFqaDropDownMenu: Dispatch<SetStateAction<boolean>>;
}


const DataMenus: DashboardMenuType[] = [
    {
        title: 'Offerwall',
        path: '/offerwall',
        icon: <TbNavigationDiscount />
    },
    {
        title: 'Postback URls',
        path: '/postbackURLs',
        icon: <HiLink />
    },
    {
        title: 'Payout History',
        path: '/payoutHistory',
        icon: <RiSecurePaymentLine />
    },
]

const ReportMenus: DashboardMenuType[] = [
    {
        title: 'Main Report',
        path: '/mainReport',
        icon: <HiOutlineDocumentReport />
    },
    {
        title: 'Transaction Report',
        path: '/transactionReport',
        icon: <MdOutlinePayments />
    },
]

const HelpMenus: DashboardMenuType[] = [
    {
        title: 'FQA',
        path: '/fqa',
        icon: <BsQuestionDiamond />
    }
]


export default function Sidebar({ children, sidebarOpen, setSidebarOpen, reportsDropDownMenu, setReportDropDownMenu, fqaDropDownMenu, setFqaDropDownMenu }: SidebarProps) {
    const pathname = usePathname();
    const router = useRouter();

    const themeDark = useAppSelector((state) => state.themeReducer.theme);
    const dispatch = useDispatch<AppDispatch>();

    function handleDropdown(id: string) {
        if (id === 'reports') {
            setReportDropDownMenu(!reportsDropDownMenu);
            if (!sidebarOpen) {
                setSidebarOpen(!sidebarOpen)
            }
        }
        else if (id === 'fqa') {
            setFqaDropDownMenu(!fqaDropDownMenu)
            if (!sidebarOpen) {
                setSidebarOpen(!sidebarOpen)
            }
        }
    }

    return (
        <div className={themeDark === 'false' ? styles.sidebar_container :
            styles.sidebar_container_dark}>
            <div
                className={sidebarOpen ?
                    `${themeDark === 'false' ? styles.sidebar_wrapper_open : styles.sidebar_wrapper_open_dark}`
                    :
                    `${themeDark === 'false' ? styles.sidebar_wrapper_close : styles.sidebar_wrapper_close_dark}`
                }>
                <div className={styles.sidebar_content}>

                    {/* Profile info */}
                    <div className={styles.profile_container}>
                        <Image
                            className={sidebarOpen ? styles.profile_image : styles.profile_image_collapse}
                            alt="profile image"
                            src={tiggzy}
                            height={200}
                            width={200}
                            objectFit='cover'
                        />
                        <h2
                            className={sidebarOpen ? styles.profile_name : styles.profile_name_collapse}>
                            Michael Larson
                        </h2>
                        <h3 className={sidebarOpen ? styles.profile_id : styles.profile_id_collapse}>ID: {'6d910632'}</h3>
                    </div>

                    {/*****Dashboard home*****/}
                    <div className={styles.dashboard_menu_items_container}>
                        <div className={sidebarOpen ? styles.menus_wrapper : styles.menus_wrapper_collapse}>
                            <Link
                                href={'/dashboard'}
                                className={sidebarOpen ? `${pathname === '/dashboard' ?
                                    styles.single_menu_btn_selected
                                    :
                                    styles.single_menu_btn}`
                                    :
                                    `${pathname === '/dashboard' ?
                                        styles.single_menu_btn_collapse_selected
                                        :
                                        styles.single_menu_btn_collapse}`}>
                                <span
                                    className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                    <BsSpeedometer2 />
                                </span>
                                <span
                                    className={sidebarOpen ? styles.sidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                    Dashboard
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/*****Dashboard Menus*****/}
                    {/* Data section */}
                    <div className={styles.main_menus_container}>
                        <h2 className={styles.menu_category}>Data</h2>
                        <div className={sidebarOpen ? styles.menus_wrapper : styles.menus_wrapper_collapse}>
                            {
                                DataMenus.map((menu: DashboardMenuType, index: number) =>
                                    <Link
                                        key={index}
                                        href={menu.path}
                                        className={sidebarOpen ?
                                            `${pathname === menu.path ?
                                                styles.single_menu_btn_selected
                                                :
                                                styles.single_menu_btn}`
                                            :
                                            `${pathname === menu.path ?
                                                styles.single_menu_btn_collapse_selected
                                                :
                                                styles.single_menu_btn_collapse}`}>
                                        <span
                                            className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                            {menu.icon}
                                        </span>
                                        <span
                                            className={sidebarOpen ? styles.saidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                            {menu.title}
                                        </span>
                                    </Link>
                                )
                            }
                        </div>

                        {/* Reports section */}
                        <h2 className={styles.menu_category}>Repots</h2>
                        <div
                            className={sidebarOpen ? styles.menus_wrapper : styles.menus_wrapper_collapse}>
                            <button
                                onClick={() => handleDropdown('reports')}
                                className={!reportsDropDownMenu || !sidebarOpen ? styles.dropdown_btn : styles.dropdown_btn_selected}>
                                <span className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                    <TbReport size={20} />
                                </span>
                                <span className={sidebarOpen ? styles.sidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                    Reports
                                </span>
                                <span
                                    className={!reportsDropDownMenu || !sidebarOpen ? styles.report_btn_arrow_right : styles.report_btn_arrow_down}>
                                    <AiOutlineRight />
                                </span>
                            </button>
                            <div className={reportsDropDownMenu ? `${sidebarOpen ? styles.dropdown_container_open : styles.sub_menus_wrapper_collapse}` : styles.dropdown_container_close}>
                                {
                                    ReportMenus.map((menu: DashboardMenuType, index: number) =>
                                        <Link
                                            key={index}
                                            href={menu.path}
                                            className={sidebarOpen ?
                                                `${pathname === menu.path ?
                                                    styles.single_menu_btn_selected
                                                    :
                                                    styles.single_menu_btn}`
                                                :
                                                `${pathname === menu.path ?
                                                    styles.single_menu_btn_collapse_selected
                                                    :
                                                    styles.single_menu_btn_collapse}`}>
                                            <span
                                                className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                                {menu.icon}
                                            </span>
                                            <span
                                                className={sidebarOpen ? styles.saidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                                {menu.title}
                                            </span>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>

                        {/* Hele center */}
                        <h2 className={styles.menu_category}>Help</h2>
                        <div
                            className={sidebarOpen ? styles.menus_wrapper : styles.menus_wrapper_collapse}>
                            <button
                                onClick={() => handleDropdown('fqa')}
                                className={!fqaDropDownMenu || !sidebarOpen ? styles.dropdown_btn : styles.dropdown_btn_selected}>
                                <span className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                    <TbProgressHelp size={20} />
                                </span>
                                <span className={sidebarOpen ? styles.sidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                    Help Center
                                </span>
                                <span
                                    className={!fqaDropDownMenu || !sidebarOpen ? styles.report_btn_arrow_right : styles.report_btn_arrow_down}>
                                    <AiOutlineRight />
                                </span>
                            </button>
                            <div className={fqaDropDownMenu ? `${sidebarOpen ? styles.dropdown_container_open : styles.sub_menus_wrapper_collapse}` : styles.dropdown_container_close}>
                                {
                                    HelpMenus.map((menu: DashboardMenuType, index: number) =>
                                        <Link
                                            key={index}
                                            href={menu.path}
                                            className={sidebarOpen ?
                                                `${pathname === menu.path ?
                                                    styles.single_menu_btn_selected
                                                    :
                                                    styles.single_menu_btn}`
                                                :
                                                `${pathname === menu.path ?
                                                    styles.single_menu_btn_collapse_selected
                                                    :
                                                    styles.single_menu_btn_collapse}`}>
                                            <span
                                                className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                                {menu.icon}
                                            </span>
                                            <span
                                                className={sidebarOpen ? styles.saidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                                {menu.title}
                                            </span>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    {/* logout and Go Home */}
                    <div className={styles.log_home_btn_container}>
                        <button
                            onClick={() => router.push('/')}
                            className={styles.home_btn}>
                            <span className={styles.home_icon}>
                                <TbHomeDot />
                            </span>
                            Go Home
                        </button>
                        <button
                            className={styles.logout_btn}>
                            <span className={styles.logout_icon}>
                                <BiLogOutCircle />
                            </span>
                            Logout
                        </button>
                    </div>

                    {/* manager contact */}
                    <div className={sidebarOpen ? styles.manager_contact_container : styles.manager_contact_container_hide}>
                        <p className={styles.contact_manager_heading}>Manager Contact</p>
                        <Link href={'#'} className={styles.contact_single}>
                            <span className={styles.contact_icon}><AiOutlineUser /></span>
                            <p>Lyudmila ADSEMPIRE DIRECT</p>
                        </Link>
                        <Link href={'mailto:lyudmila@adsempire.com'} className={styles.contact_single}>
                            <span className={styles.contact_icon}><HiOutlineMail /></span>
                            <p>lyudmila@adsempire.com</p>
                        </Link>
                        <Link href={'#'} className={styles.contact_single}>
                            <span className={styles.contact_icon}><AiOutlineSkype /></span>
                            <p>live:.cid.59ad562d6d3a8ded</p>
                        </Link>
                        <Link href={'#'} className={styles.contact_single}>
                            <span className={styles.contact_icon}><PiPaperPlaneTiltLight /></span>
                            <p>@Lyudmila_AED</p>
                        </Link>
                    </div>
                </div>
            </div>
            <main className={styles.children_container}>
                {children}
            </main>
        </div >
    )
}