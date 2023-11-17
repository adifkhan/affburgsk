import React, { Dispatch, SetStateAction, useState } from 'react';
import tiggzy from '../../public/toggzy.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineFundProjectionScreen, AiOutlineRight, AiOutlineSkype, AiOutlineUser } from 'react-icons/ai';
import { HiLink, HiOutlineDocumentReport, HiOutlineMail } from 'react-icons/hi';
import { PiPaperPlaneTiltLight } from 'react-icons/pi';
import { TbHomeSignal, TbNavigationDiscount, TbProgressHelp, TbReport } from 'react-icons/tb';
import { BsQuestionDiamond, BsQuestionLg, BsSpeedometer2 } from 'react-icons/bs';
import { DashboardMenuType } from '@/types/models';
import { RiSecurePaymentLine, RiShutDownLine } from 'react-icons/ri';
import { MdOutlinePayments } from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import { AppDispatch, useAppSelector } from '@/app/GlobalRedux/store';
import { useDispatch } from 'react-redux';
import { Box, Typography, Button, Tooltip } from '@mui/material';
import { LiaEdit } from 'react-icons/lia';


type SidebarProps = {
    children: React.ReactNode;
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    reportsDropDownMenu: boolean;
    setReportDropDownMenu: Dispatch<SetStateAction<boolean>>;
    fqaDropDownMenu: boolean;
    setFqaDropDownMenu: Dispatch<SetStateAction<boolean>>;
}

const sidebarTopLinks: DashboardMenuType[] = [
    {
        title: 'Edit profile',
        path: '#',
        icon: <LiaEdit />
    },
    {
        title: 'Overview',
        path: '#',
        icon: <AiOutlineFundProjectionScreen />
    },
    {
        title: 'Home',
        path: '/',
        icon: <TbHomeSignal />
    },
    {
        title: 'Support',
        path: '#',
        icon: <BsQuestionLg />
    },
    {
        title: 'Logout',
        path: '#',
        icon: <RiShutDownLine />
    },
]
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
    const [hover, setHover] = useState<string>('')

    function handleDropdown(id: string) {
        if (id === 'reports') {
            if (!sidebarOpen) {
                setSidebarOpen(!sidebarOpen)
                setReportDropDownMenu(true);
            }
            else {
                setReportDropDownMenu(!reportsDropDownMenu);
            }
        }
        else if (id === 'contact') {
            if (!sidebarOpen) {
                setSidebarOpen(!sidebarOpen)
                setFqaDropDownMenu(true);
            }
            else {
                setFqaDropDownMenu(!fqaDropDownMenu);
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
                backgroundColor: '#121622',
                transition: '.2s',
            }}>
            <Box component={'div'}
                sx={sidebarOpen ?
                    {
                        backgroundColor: '#1c2437',
                        padding: '20px 10px 20px 10px',
                        minWidth: { xs: '60%', sm: '30%', md: '25%', lg: '15%' },
                        maxWidth: { xs: '60%', sm: '30%', md: '25%', lg: '15%' },
                        position: { xs: 'absolute', md: 'static' },
                        top: 45,
                        left: 0,
                        height: { xs: '100vh' },
                        overflowY: 'scroll',
                        '&::-webkit-scrollbar': { display: 'none' },
                        transition: '.5s',
                        transformOrigin: 'left',
                        zIndex: 50,

                    }
                    :
                    {
                        backgroundColor: '#1c2437',
                        padding: { xs: 0, md: '20px 10px 20px 10px' },
                        maxWidth: { xs: 0, sm: 0, md: '8%', lg: '5%' },
                        minWidth: { xs: 0, sm: 0, md: '8%', lg: '5%' },
                        position: { xs: 'absolute', md: 'static' },
                        top: 45,
                        left: 0,
                        height: { xs: '100vh' },
                        overflowY: 'scroll',
                        '&::-webkit-scrollbar': { display: 'none' },
                        transition: '.5s',
                        transformOrigin: 'left',
                        zIndex: 50,
                    }}>

                {/* Profile info */}
                <Box component={'div'}
                    sx={{
                        height: 70,
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
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: "100%",
                        backgroundColor: '#293247',
                        justifyContent: 'space-between',
                        mb: 5,
                        borderRadius: `${sidebarOpen ? '2px' : '4px'}`,
                        transition: '.3s',
                    }}>
                    {sidebarTopLinks.map((link, index) =>
                        <Tooltip followCursor key={index} title={link.title}>
                            <Box
                                component={'span'}
                                sx={sidebarOpen ?
                                    {
                                        p: '10px',
                                        fontSize: '18px',
                                        color: '#36a689',
                                        cursor: 'pointer',
                                        transition: '.3s',
                                        width: '100%',
                                        '&:hover': {
                                            color: '#ED7D31'
                                        }
                                    }
                                    :
                                    {
                                        display: `${link.path === '/' ? 'flex' : 'none'}`,
                                        p: '6px',
                                        fontSize: '25px',
                                        color: '#36a689',
                                        cursor: 'pointer',
                                        transition: '.3s',
                                        width: '100%',
                                        justifyContent: 'center',
                                    }
                                }><Link className='sidebar_top_link' href={link.path}>{link.icon}</Link>
                            </Box>
                        </Tooltip>
                    )}
                </Box>

                {/*****Dashboard home*****/}
                <Box component={'div'}
                >
                    <Link href={'/dashboard'}
                        onMouseEnter={() => setHover('Dashboard')}
                        onMouseLeave={() => setHover('')}
                        style={sidebarOpen ?
                            {
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '10px',
                                color: 'whiteSmoke',
                                textTransform: 'capitalize',
                                letterSpacing: '.1ch',
                                fontSize: '.8rem',
                                backgroundColor: `${pathname === '/dashboard' || hover === 'Dashboard' ? '#3D30A2' : ''}`,
                                padding: '8px',
                                borderRadius: '2px',
                                whiteSpace: 'nowrap',
                                transition: '.2s',

                            }
                            :
                            {
                                display: 'flex',
                                color: 'whiteSmoke',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: `${pathname === '/dashboard' ? '#3D30A2' : ''}`,
                                padding: '8px',
                                borderRadius: '4px',
                                transition: '.2s',
                                fontSize: '.8rem'
                            }}>
                        <Box component={'span'}
                            sx={{ fontSize: 18 }}>
                            <BsSpeedometer2 />
                        </Box>
                        <Box component={'span'}
                            sx={sidebarOpen ? { display: 'block' } : { display: 'none' }}>
                            Dashboard
                        </Box>
                    </Link>
                </Box>

                {/*****Dashboard Menus*****/}
                {/* Data section */}
                <Box component={'div'} sx={{ my: 3 }}>
                    <Typography variant='body2'
                        sx={{
                            fontFamily: 'Dosis',
                            letterSpacing: '.1ch',
                            color: 'darkGrey',
                            fontSize: '1rem',
                            pb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}>Data <Box sx={{ width: '100%', borderBottom: '1px dashed #444444' }} component={'span'}></Box></Typography>
                    <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', gap: .5 }}>
                        {
                            DataMenus.map((menu: DashboardMenuType, index: number) =>
                                <Link
                                    onMouseEnter={() => setHover(menu.title)}
                                    onMouseLeave={() => setHover('')}
                                    key={index}
                                    href={menu.path}
                                    style={sidebarOpen ?
                                        {
                                            display: 'flex',
                                            alignItems: 'center',
                                            columnGap: '10px',
                                            color: 'whiteSmoke',
                                            textTransform: 'capitalize',
                                            letterSpacing: '.1ch',
                                            fontSize: '.8rem',
                                            backgroundColor: `${pathname === menu.path || hover === menu.title ? '#3D30A2' : ''}`,
                                            padding: '8px',
                                            borderRadius: '2px',
                                            whiteSpace: 'nowrap',
                                            transition: '.2s',

                                        }
                                        :
                                        {
                                            display: 'flex',
                                            color: 'whiteSmoke',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: `${pathname === menu.path || hover === menu.title ? '#3D30A2' : ''}`,
                                            padding: '8px',
                                            borderRadius: '4px',
                                            transition: '.2s',
                                            fontSize: '.8rem'
                                        }}>
                                    <Box component={'span'}
                                        sx={{ fontSize: 18 }}>
                                        {menu.icon}
                                    </Box>
                                    <Box component={'span'}
                                        sx={sidebarOpen ? { display: 'block' } : { display: 'none' }}>
                                        {menu.title}
                                    </Box>
                                </Link>
                            )
                        }
                    </Box>

                    {/* Reports section */}
                    <Typography variant='body2'
                        sx={{
                            fontFamily: 'Dosis',
                            letterSpacing: '.1ch',
                            color: 'darkGrey',
                            fontSize: '1rem',
                            pb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mt: 3,
                        }}>Reports <Box sx={{ width: '100%', borderBottom: '1px dashed #444444' }} component={'span'}></Box></Typography>
                    <Box component={'div'}>
                        <Button
                            onMouseEnter={() => setHover('Reports')}
                            onMouseLeave={() => setHover('')}
                            onClick={() => handleDropdown('reports')}
                            style={sidebarOpen ?
                                {
                                    display: 'flex',
                                    color: 'whitesmoke',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: `${hover === "Reports" || reportsDropDownMenu ? '#3d475f63' : ''}`,
                                    gap: '10px',
                                    textTransform: 'capitalize',
                                    padding: '8px',
                                    borderRadius: '2px',
                                    transition: '.2s',
                                    fontSize: '.8rem',
                                    width: '100%',
                                }
                                :
                                {
                                    display: 'flex',
                                    color: 'whitesmoke',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: `${reportsDropDownMenu || hover === 'Reports' ? '#3d475f63' : ''}`,
                                    gap: '10px',
                                    textTransform: 'capitalize',
                                    padding: '8px',
                                    borderRadius: '2px',
                                    transition: '.2s',
                                    fontSize: '.8rem',
                                    width: '100%',
                                }}>
                            <Box component={'span'} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <TbReport size={18} />
                                <Typography variant='body2'
                                    sx={sidebarOpen ?
                                        {
                                            display: 'block', fontFamily: 'Dosis', letterSpacing: '.1ch'
                                        }
                                        :
                                        { display: 'none' }}>
                                    Reports
                                </Typography>
                            </Box>
                            <Box component={'span'}
                                sx={!reportsDropDownMenu || !sidebarOpen ?
                                    {
                                        fontSize: '1rem',
                                        transition: '.2s',
                                    }
                                    :
                                    {
                                        fontSize: '1rem',
                                        transform: 'rotate(-90deg)',
                                        transition: '.2s',
                                    }}>
                                <AiOutlineRight />
                            </Box>
                        </Button>
                        <Box component={'div'}
                            sx={reportsDropDownMenu ?
                                {
                                    height: 'fit-content',
                                    transformOrigin: 'top',
                                    backgroundColor: '#121622',
                                    padding: '10px 0 10px 0',
                                    transition: '.3s',

                                }
                                :
                                {
                                    height: 0,
                                    transformOrigin: 'top',
                                    transition: '.3s',
                                }}>
                            {
                                ReportMenus.map((menu: DashboardMenuType, index: number) =>
                                    <Link
                                        onMouseEnter={() => setHover(menu.title)}
                                        onMouseLeave={() => setHover('')}
                                        key={index}
                                        href={menu.path}
                                        style={reportsDropDownMenu ? {
                                            display: 'flex',
                                            alignItems: 'center',
                                            columnGap: '10px',
                                            color: `${pathname === menu.path || hover === menu.title ? '#ED7D31' : 'whiteSmoke'}`,
                                            textTransform: 'capitalize',
                                            letterSpacing: '.1ch',
                                            fontSize: '.8rem',
                                            padding: '8px',
                                            marginLeft: '20px',
                                            borderRadius: '2px',
                                            whiteSpace: 'nowrap',
                                            transition: '.2s',
                                        } : { display: 'none' }}>
                                        {/* <Box component={'span'}
                                                sx={{ fontSize: '18px' }}>
                                                {menu.icon}
                                            </Box> */}
                                        <Box component={'span'}>
                                            {menu.title}
                                        </Box>
                                    </Link>
                                )
                            }
                        </Box>
                    </Box>

                    {/* Contact center */}
                    <Typography variant='body2'
                        sx={{
                            fontFamily: 'Dosis',
                            letterSpacing: '.1ch',
                            color: 'darkGrey',
                            fontSize: '1rem',
                            pb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mt: 3,
                            whiteSpace: 'nowrap'
                        }}>Contact <Box sx={{ width: '100%', borderBottom: '1px dashed #444444' }} component={'span'}></Box></Typography>
                    <Box component={'div'}>
                        <Button
                            onMouseEnter={() => setHover('Help Center')}
                            onMouseLeave={() => setHover('')}
                            onClick={() => handleDropdown('contact')}
                            style={sidebarOpen ?
                                {
                                    display: 'flex',
                                    color: 'whitesmoke',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: `${hover === "Help Center" || fqaDropDownMenu ? '#3d475f63' : ''}`,
                                    gap: '10px',
                                    textTransform: 'capitalize',
                                    padding: '8px',
                                    borderRadius: '2px',
                                    transition: '.2s',
                                    fontSize: '.8rem',
                                    width: '100%',
                                }
                                :
                                {
                                    display: 'flex',
                                    color: 'whitesmoke',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: `${fqaDropDownMenu || hover === 'Help Center' ? '#3d475f63' : ''}`,
                                    gap: '10px',
                                    textTransform: 'capitalize',
                                    padding: '8px',
                                    borderRadius: '2px',
                                    transition: '.2s',
                                    fontSize: '.8rem',
                                    width: '100%',
                                }}>
                            <Box component={'span'} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <TbProgressHelp size={18} />
                                <Typography variant='body2'
                                    sx={sidebarOpen ?
                                        {
                                            display: 'block', fontFamily: 'Dosis', letterSpacing: '.1ch'
                                        }
                                        :
                                        { display: 'none' }}>
                                    Help Center
                                </Typography>
                            </Box>
                            <Box component={'span'}
                                sx={!fqaDropDownMenu || !sidebarOpen ?
                                    {
                                        fontSize: '.8rem',
                                        transition: '.2s',
                                    }
                                    :
                                    {
                                        fontSize: '.8rem',
                                        transform: 'rotate(-90deg)',
                                        transition: '.2s',
                                    }}>
                                <AiOutlineRight />
                            </Box>
                        </Button>
                        <Box component={'div'}
                            sx={fqaDropDownMenu ?
                                {
                                    height: 'fit-content',
                                    transformOrigin: 'top',
                                    backgroundColor: '#121622',
                                    padding: '10px 0 10px 0',
                                    transition: '.3s',

                                }
                                :
                                {
                                    height: 0,
                                    transformOrigin: 'top',
                                    transition: '.3s',
                                }}>
                            {
                                HelpMenus.map((menu: DashboardMenuType, index: number) =>
                                    <Link
                                        onMouseEnter={() => setHover(menu.title)}
                                        onMouseLeave={() => setHover('')}
                                        key={index}
                                        href={menu.path}
                                        style={fqaDropDownMenu ? {
                                            display: 'flex',
                                            alignItems: 'center',
                                            columnGap: '10px',
                                            color: `${pathname === menu.path || hover === menu.title ? '#ED7D31' : 'whiteSmoke'}`,
                                            textTransform: 'capitalize',
                                            letterSpacing: '.1ch',
                                            fontSize: '.8rem',
                                            padding: '8px',
                                            marginLeft: '20px',
                                            borderRadius: '2px',
                                            whiteSpace: 'nowrap',
                                            transition: '.2s',
                                        } : { display: 'none' }}>
                                        {/* <Box component={'span'}
                                                sx={{ fontSize: '18px' }}>
                                                {menu.icon}
                                            </Box> */}
                                        <Box component={'span'}>
                                            {menu.title}
                                        </Box>
                                    </Link>
                                )
                            }
                        </Box>
                    </Box>
                </Box>

                {/* manager contact */}
                <Box component={'div'}
                    sx={sidebarOpen ?
                        {
                            transform: 'scaleX(1)',
                            transformOrigin: 'left',
                            height: '130px',
                            opacity: 1,
                            transition: '.3s',
                            marginBottom: '30px',
                        }
                        :
                        {
                            transform: 'scaleX(0)',
                            transformOrigin: 'left',
                            opacity: 0,
                            transition: '.3s',
                            height: '130px',
                            marginBottom: '30px',
                        }}>
                    <Typography variant='body2'
                        sx={{
                            fontSize: '.9rem',
                            color: '#36a689',
                            marginTop: '25px',
                            marginBottom: '15px',
                            textTransform: 'capitalize',
                            fontWeight: 400,
                            letterSpacing: '.1ch',
                            whiteSpace: 'nowrap',
                        }}>Manager Contact</Typography>

                    <Link href={'#'}
                        style={{
                            paddingLeft: '10px',
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            color: '#d8d8d8',
                            fontSize: '.7rem',
                            marginTop: 'px',
                            letterSpacing: '.1ch',
                            whiteSpace: 'nowrap',
                            marginBottom: '7px',
                        }}>
                        <Box component={'span'}
                            sx={{
                                fontSize: '1rem',
                                color: '#d8d8d8',
                                marginRight: '6px'
                            }}>
                            <AiOutlineUser />
                        </Box>
                        <Typography sx={{ fontSize: '.7rem' }} variant='body2'>Lyudmila ADSEMPIRE DIRECT</Typography>
                    </Link>
                    <Link href={'mailto:lyudmila@adsempire.com'}
                        style={{
                            paddingLeft: '10px',
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            color: '#d8d8d8',
                            fontSize: '.7rem',
                            marginTop: 'px',
                            letterSpacing: '.1ch',
                            whiteSpace: 'nowrap',
                            marginBottom: '7px',
                        }}>
                        <Box component={'span'}
                            sx={{
                                fontSize: '1rem',
                                color: '#d8d8d8',
                                marginRight: '6px'
                            }}><HiOutlineMail /></Box>
                        <Typography sx={{ fontSize: '.7rem' }} variant='body2'>lyudmila@adsempire.com</Typography>
                    </Link>
                    <Link href={'#'}
                        style={{
                            paddingLeft: '10px',
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            color: '#d8d8d8',
                            fontSize: '.7rem',
                            marginTop: 'px',
                            letterSpacing: '.1ch',
                            whiteSpace: 'nowrap',
                            marginBottom: '7px',
                        }}>
                        <Box component={'span'}
                            sx={{
                                fontSize: '1rem',
                                color: '#d8d8d8',
                                marginRight: '6px'
                            }}><AiOutlineSkype /></Box>
                        <Typography sx={{ fontSize: '.7rem' }} variant='body2'>live:.cid.59ad562d6d3a8ded</Typography>
                    </Link>
                    <Link href={'#'}
                        style={{
                            paddingLeft: '10px',
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            color: '#d8d8d8',
                            fontSize: '.7rem',
                            marginTop: 'px',
                            letterSpacing: '.1ch',
                            whiteSpace: 'nowrap',
                            marginBottom: '7px',
                        }}>
                        <Box component={'span'}
                            sx={{
                                fontSize: '1rem',
                                color: '#d8d8d8',
                                marginRight: '6px'
                            }}><PiPaperPlaneTiltLight /></Box>
                        <Typography sx={{ fontSize: '.7rem' }} variant='body2'>@Lyudmila_AED</Typography>
                    </Link>
                </Box>
            </Box >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    py: 2.5, px: { xs: 1, md: 2 },
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': { display: 'none' },
                }}>
                {children}
            </Box>
        </Box >
    )
}