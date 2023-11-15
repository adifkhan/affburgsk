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
import { Box, Typography, Button } from '@mui/material';


type SidebarProps = {
    children: React.ReactNode;
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
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
        <Box component={'div'}
            sx={{
                display: 'flex',
                width: '100%',
                color: '#13183e',
                height: '100vh',
                backgroundColor: '#16192A',
                justifyContent: 'space-between',
                transition: '.2s',
            }}>
            <Box component={'div'}
                sx={sidebarOpen ?
                    {
                        backgroundColor: '#E9E9E9',
                        width: '20%',
                        transition: '.2s'
                    }
                    :
                    {
                        backgroundColor: '#E9E9E9',
                        width: '5%',
                        transition: '.2s'
                    }
                }>
                <Box component={'div'}
                    sx={{
                        backgroundColor: '#1c2437',
                        width: '100%',
                        height: '100%',
                        padding: '15px',
                        overflowY: 'scroll',
                        transition: '.2s',
                        '&::-webkit-scrollbar': { display: 'none' },
                    }}>
                    {/* Profile info */}
                    <Box component={'div'}
                        sx={{
                            height: 80,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: '#d8d8d8',
                            marginBottom: 6,
                        }}>
                        <Image
                            style={{
                                height: 45,
                                width: 45,
                                borderRadius: 50,
                                border: '2px solid #3d475f',
                                transition: '.3s',
                            }}
                            alt="profile image"
                            src={tiggzy}
                            height={200}
                            width={200}
                            objectFit='cover'
                        />
                        <Typography variant='h4'
                            sx={{
                                fontWeight: 400,
                                marginTop: 1,
                                fontSize: { xs: 12, md: 16 },
                                letterSpacing: '.1ch',
                                transition: '.2s',
                                opacity: `${sidebarOpen ? 1 : 0}`
                            }}>
                            Tiggzt IT
                        </Typography>
                        <Typography variant='body2'
                            sx={{
                                fontSize: '.8rem',
                                letterSpacing: '.1ch',
                                fontWeight: '500',
                                transition: `${sidebarOpen ? '.3s' : '.1s'}`,
                                color: '#36a689',
                                marginTop: 1,
                                opacity: `${sidebarOpen ? 1 : 0}`,
                            }}>
                            ID: {'6d910632'}</Typography>
                    </Box>

                    {/*****Dashboard home*****/}
                    <Box component={'div'}
                        sx={{
                            color: 'whiteSmoke',
                        }}>
                        <Box component={'div'}
                            sx={sidebarOpen ?
                                {

                                }
                                :
                                {

                                }}
                            className={sidebarOpen ? styles.menus_wrapper : styles.menus_wrapper_collapse}>
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
                                <Box component={'span'}
                                    className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                    <BsSpeedometer2 />
                                </Box>
                                <Box component={'span'}
                                    className={sidebarOpen ? styles.sidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                    Dashboard
                                </Box>
                            </Link>
                        </Box>
                    </Box>

                    {/*****Dashboard Menus*****/}
                    {/* Data section */}
                    <Box component={'div'} className={styles.main_menus_container}>
                        <h2 className={styles.menu_category}>Data</h2>
                        <Box component={'div'} className={sidebarOpen ? styles.menus_wrapper : styles.menus_wrapper_collapse}>
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
                                        <Box component={'span'}
                                            className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                            {menu.icon}
                                        </Box>
                                        <Box component={'span'}
                                            className={sidebarOpen ? styles.saidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                            {menu.title}
                                        </Box>
                                    </Link>
                                )
                            }
                        </Box>

                        {/* Reports section */}
                        <h2 className={styles.menu_category}>Repots</h2>
                        <Box component={'div'}
                            className={sidebarOpen ? styles.menus_wrapper : styles.menus_wrapper_collapse}>
                            <Button
                                onClick={() => handleDropdown('reports')}
                                className={!reportsDropDownMenu || !sidebarOpen ? styles.dropdown_btn : styles.dropdown_btn_selected}>
                                <Box component={'span'} className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                    <TbReport size={20} />
                                </Box>
                                <Box component={'span'} className={sidebarOpen ? styles.sidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                    Reports
                                </Box>
                                <Box component={'span'}
                                    className={!reportsDropDownMenu || !sidebarOpen ? styles.report_btn_arrow_right : styles.report_btn_arrow_down}>
                                    <AiOutlineRight />
                                </Box>
                            </Button>
                            <Box component={'div'} className={reportsDropDownMenu ? `${sidebarOpen ? styles.dropdown_container_open : styles.sub_menus_wrapper_collapse}` : styles.dropdown_container_close}>
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
                                            <Box component={'span'}
                                                className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                                {menu.icon}
                                            </Box>
                                            <Box component={'span'}
                                                className={sidebarOpen ? styles.saidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                                {menu.title}
                                            </Box>
                                        </Link>
                                    )
                                }
                            </Box>
                        </Box>

                        {/* Hele center */}
                        <h2 className={styles.menu_category}>Help</h2>
                        <Box component={'div'}
                            className={sidebarOpen ? styles.menus_wrapper : styles.menus_wrapper_collapse}>
                            <Button
                                onClick={() => handleDropdown('fqa')}
                                className={!fqaDropDownMenu || !sidebarOpen ? styles.dropdown_btn : styles.dropdown_btn_selected}>
                                <Box component={'span'} className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                    <TbProgressHelp size={20} />
                                </Box>
                                <Box component={'span'} className={sidebarOpen ? styles.sidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                    Help Center
                                </Box>
                                <Box component={'span'}
                                    className={!fqaDropDownMenu || !sidebarOpen ? styles.report_btn_arrow_right : styles.report_btn_arrow_down}>
                                    <AiOutlineRight />
                                </Box>
                            </Button>
                            <Box component={'div'} className={fqaDropDownMenu ? `${sidebarOpen ? styles.dropdown_container_open : styles.sub_menus_wrapper_collapse}` : styles.dropdown_container_close}>
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
                                            <Box component={'span'}
                                                className={sidebarOpen ? styles.saidebar_menu_icon : styles.saidebar_menu_icon_collapse}>
                                                {menu.icon}
                                            </Box>
                                            <Box component={'span'}
                                                className={sidebarOpen ? styles.saidebar_menu_text : styles.saidebar_menu_text_collapse}>
                                                {menu.title}
                                            </Box>
                                        </Link>
                                    )
                                }
                            </Box>
                        </Box>
                    </Box>

                    {/* logout and Go Home */}
                    <Box component={'div'} className={styles.log_home_btn_container}>
                        <Button
                            onClick={() => router.push('/')}
                            className={styles.home_btn}>
                            <Box component={'span'} className={styles.home_icon}>
                                <TbHomeDot />
                            </Box>
                            Go Home
                        </Button>
                        <Button
                            className={styles.logout_btn}>
                            <Box component={'span'} className={styles.logout_icon}>
                                <BiLogOutCircle />
                            </Box>
                            Logout
                        </Button>
                    </Box>

                    {/* manager contact */}
                    <Box component={'div'} className={sidebarOpen ? styles.manager_contact_container : styles.manager_contact_container_hide}>
                        <Typography variant='body2' className={styles.contact_manager_heading}>Manager Contact</Typography>
                        <Link href={'#'} className={styles.contact_single}>
                            <Box component={'span'} className={styles.contact_icon}><AiOutlineUser /></Box>
                            <Typography variant='body2'>Lyudmila ADSEMPIRE DIRECT</Typography>
                        </Link>
                        <Link href={'mailto:lyudmila@adsempire.com'} className={styles.contact_single}>
                            <Box component={'span'} className={styles.contact_icon}><HiOutlineMail /></Box>
                            <Typography variant='body2'>lyudmila@adsempire.com</Typography>
                        </Link>
                        <Link href={'#'} className={styles.contact_single}>
                            <Box component={'span'} className={styles.contact_icon}><AiOutlineSkype /></Box>
                            <Typography variant='body2'>live:.cid.59ad562d6d3a8ded</Typography>
                        </Link>
                        <Link href={'#'} className={styles.contact_single}>
                            <Box component={'span'} className={styles.contact_icon}><PiPaperPlaneTiltLight /></Box>
                            <Typography variant='body2'>@Lyudmila_AED</Typography>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <main className={styles.children_container}>
                {children}
            </main>
        </Box >
    )
}