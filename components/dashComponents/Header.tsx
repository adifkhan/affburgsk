'use client'

import styles from '@/styles/Dashboard/Header.module.css';
import { AiOutlineSetting } from 'react-icons/ai';
import { LiaUserCogSolid } from 'react-icons/lia';
import { TbMenu2 } from 'react-icons/tb';
import { CgLogOut, CgMenuLeft } from 'react-icons/cg';
import { Dispatch, SetStateAction, useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import avatar from '../../public/pngegg.png';
import Image from 'next/image';
import { BsGrid, BsMoonStars } from 'react-icons/bs';
import { HiOutlineSun } from 'react-icons/hi';
import Notification from './Notification';
import Search from './Search';
import ModalDashboard from './ModalDashboard';
import { AppDispatch, useAppSelector } from '@/app/GlobalRedux/store';
import { useDispatch } from 'react-redux';
import { themeState } from '@/app/GlobalRedux/features/theme-slice';
import { GoScreenFull } from 'react-icons/go';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { BiUserPlus } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { MdLogout, MdOutlineLogin } from 'react-icons/md';
import { useRouter } from 'next/navigation';


type HeaderProps = {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    reportsDropDownMenu: boolean;
    setReportDropDownMenu: Dispatch<SetStateAction<boolean>>;
    fqaDropDownMenu: boolean;
    setFqaDropDownMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ sidebarOpen, setSidebarOpen, reportsDropDownMenu, setReportDropDownMenu, fqaDropDownMenu, setFqaDropDownMenu }: HeaderProps) {
    const router = useRouter();
    const user = useAppSelector((state) => state.authReducer.user);

    const [badgeOpen, setBadgeOpen] = useState<boolean>(true);
    const [open, setOpen] = useState<boolean>(false);

    //for redux state manage
    const themeDark = useAppSelector((state) => state.themeReducer.theme);
    const dispatch = useDispatch<AppDispatch>();

    //for profile manu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openAnchorEl = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAnchorEl = () => {
        setAnchorEl(null);
    };

    const handleSidebar = () => {
        if (reportsDropDownMenu) {
            setReportDropDownMenu(!reportsDropDownMenu)
        }
        if (fqaDropDownMenu) {
            setFqaDropDownMenu(!fqaDropDownMenu)
        }
        setSidebarOpen(!sidebarOpen)
    }

    const handleTheme = () => {
        if (themeDark === 'false') {
            dispatch(themeState('true'))
        }
        else {
            dispatch(themeState('false'))
        }
    }

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);


    return (
        <Box
            component={'header'}
            sx={{
                backgroundColor: '#121622',
                color: 'whitesmoke',
                position: 'sticky',
                top: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '50px',
                padding: '0 10px',
                boxShadow: '0px 7px 18px -15px rgba(0, 0, 0, 0.51)',
                zIndex: 100,
                transition: '.3s',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    columnGap: '15px',
                    alignItems: 'center',
                }}>
                <Tooltip
                    onClick={handleSidebar}
                    title="Collapse sidebar"
                    placement="right">
                    <Box component={'span'}
                        sx={{
                            fontSize: {
                                xs: 20, md: 25, lg: 25,
                                cursor: 'pointer',
                                padding: 2
                            }
                        }}>
                        {sidebarOpen ? <TbMenu2 /> : <CgMenuLeft />}
                    </Box>
                </Tooltip>
            </Box>
            <Box component={'div'}
                sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: { xs: 0, md: '12px', }
                }}>
                <Search themeDark={themeDark} />
                <Tooltip title="Theme" placement="bottom">
                    <Box
                        component={'div'}>
                        <IconButton
                            // for theme toggle
                            // onClick={handleTheme}
                            // for modal open
                            onClick={handleOpen}
                            sx={{ fontSize: { xs: '14px', md: '20px' }, color: 'whiteSmoke' }}
                            aria-label="theme">
                            {themeDark === 'false' ? <HiOutlineSun /> : <BsMoonStars />}
                        </IconButton>
                        <ModalDashboard
                            open={open}
                            handleClose={handleClose}
                        />
                    </Box>
                </Tooltip>
                <Notification
                    badgeOpen={badgeOpen}
                    setBadgeOpen={setBadgeOpen}
                />
                <Tooltip title="Rearrange" placement="bottom">
                    <IconButton
                        // disabled
                        sx={{ fontSize: { xs: '14px', md: '20px' }, color: 'whiteSmoke' }}
                        aria-label="delete">
                        <BsGrid />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Full screen" placement="bottom">
                    <IconButton
                        // disabled
                        sx={{ fontSize: { xs: '14px', md: '20px' }, color: 'whiteSmoke' }}
                        aria-label="delete">
                        <GoScreenFull />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Setting" placement="bottom">
                    <IconButton
                        // disabled
                        sx={{ fontSize: { xs: '14px', md: '20px' }, color: 'whiteSmoke' }} aria-label="setting">
                        <AiOutlineSetting />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    onClick={handleClick}
                    title="Profile"
                    placement="bottom">
                    <Box sx={{
                        backgroundColor: '#1C2437', borderRadius: '25px', display: 'flex', alignItems: 'center', columnGap: '15px', cursor: 'pointer', padding: '4px 6px',
                    }}
                    >
                        <Box component={'span'} sx={{ height: '30px', width: '30px', borderRadius: '50%' }}>
                            <Image objectFit='cover' height={200} width={200} src={avatar} alt='user' />
                        </Box>
                        <Box component={'span'} sx={{ fontSize: { xs: 14, md: 20 }, display: { xs: 'none', md: 'block' } }}>
                            <LiaUserCogSolid />
                        </Box>
                    </Box>
                </Tooltip>
                <Menu
                    disableScrollLock={true}
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openAnchorEl}
                    onClose={handleCloseAnchorEl}
                    onClick={handleCloseAnchorEl}
                    PaperProps={themeDark === 'true' ? {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            color: 'lightGrey',
                            fontWeightL: 600,
                            backgroundColor: '#1C2437',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 25,
                                height: 25,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: '#1C2437',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    } : {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            color: '#131926',
                            fontWeightL: 600,
                            backgroundColor: 'whiteSmoke',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 25,
                                height: 25,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'whiteSmoke',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }
                    }
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem
                        sx={themeDark === 'true' ?
                            {
                                fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                                '&:hover': {
                                    backgroundColor: '#7752FE'
                                }
                            } : {
                                fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                            }
                        }
                        onClick={handleClose}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem sx={themeDark === 'true' ?
                        {
                            fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                            '&:hover': {
                                backgroundColor: '#7752FE'
                            }
                        } : {
                            fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                        }
                    }
                        onClick={handleClose}>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem sx={themeDark === 'true' ?
                        {
                            fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                            '&:hover': {
                                backgroundColor: '#7752FE'
                            }
                        } : {
                            fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                            // '&:hover': {
                            //     backgroundColor: 'hrey'
                            // }
                        }
                    }
                        onClick={handleClose}>
                        <ListItemIcon>
                            <BiUserPlus color={themeDark === 'true' ? '#3EC1A1' : '#7752FE'} size={20} />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem sx={themeDark === 'true' ?
                        {
                            fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                            '&:hover': {
                                backgroundColor: '#7752FE'
                            }
                        } : {
                            fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                        }
                    }
                        onClick={handleClose}>
                        <ListItemIcon>
                            <CiSettings color={themeDark === 'true' ? '#3EC1A1' : '#7752FE'} size={20} />
                        </ListItemIcon>
                        Settings
                    </MenuItem>

                    {user ? <MenuItem sx={themeDark === 'true' ?
                        {
                            fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                            '&:hover': {
                                backgroundColor: '#7752FE'
                            }
                        } : {
                            fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                        }
                    }
                        onClick={handleClose}>
                        <ListItemIcon>
                            <MdLogout color={themeDark === 'true' ? '#3EC1A1' : '#7752FE'} size={20} />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                        :
                        <MenuItem sx={themeDark === 'true' ?
                            {
                                fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                                '&:hover': {
                                    backgroundColor: '#7752FE'
                                }
                            } : {
                                fontFamily: 'Dosis', fontSize: '1rem', letterSpacing: '.1ch',
                            }
                        }
                            onClick={() => router.push('/signin')}>
                            <ListItemIcon>
                                <MdOutlineLogin color={themeDark === 'true' ? '#3EC1A1' : '#7752FE'} size={20} />
                            </ListItemIcon>
                            Login
                        </MenuItem>
                    }
                </Menu>
            </Box>
        </Box>
    )
}
