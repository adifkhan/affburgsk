'use client'
import styles from '@/styles/Dashboard/Header.module.css';
import { AiOutlineSetting } from 'react-icons/ai';
import { LiaUserCogSolid } from 'react-icons/lia';
import { TbMenu2 } from 'react-icons/tb';
import { CgMenuLeft } from 'react-icons/cg';
import { Dispatch, SetStateAction, useState } from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
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


type HeaderProps = {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    reportsDropDownMenu: boolean;
    setReportDropDownMenu: Dispatch<SetStateAction<boolean>>;
    fqaDropDownMenu: boolean;
    setFqaDropDownMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ sidebarOpen, setSidebarOpen, reportsDropDownMenu, setReportDropDownMenu, fqaDropDownMenu, setFqaDropDownMenu }: HeaderProps) {
    const [badgeOpen, setBadgeOpen] = useState<boolean>(true);
    const [open, setOpen] = useState<boolean>(false);

    //for redux state manage
    const themeDark = useAppSelector((state) => state.themeReducer.theme);
    const dispatch = useDispatch<AppDispatch>();

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
        <header className={themeDark === 'false' ? styles.header_container : styles.header_container_dark}>
            <Box className={styles.header_left_side}>
                <Tooltip
                    onClick={handleSidebar}
                    title="Collapse sidebar"
                    placement="right">
                    <span className={themeDark === 'false' ? styles.menu_logo : styles.menu_logo_dark}>{sidebarOpen ? <TbMenu2 /> : <CgMenuLeft />}</span>
                </Tooltip>
                <Typography fontSize={'1.5rem'} textTransform={'uppercase'} variant='h2'>Adminis</Typography>
            </Box>
            <div className={styles.header_right_logo}>
                <Search themeDark={themeDark} />
                <Tooltip title="Theme" placement="bottom">
                    <Box component={'div'}>
                        <IconButton
                            // for theme toggle
                            onClick={handleTheme}
                            // for modal open
                            // onClick={handleOpen}
                            sx={themeDark === 'false' ? { color: '#13183e' } : { color: 'whitesmoke' }}
                            aria-label="theme">
                            {themeDark === 'false' ? <HiOutlineSun size={'20px'} /> : <BsMoonStars size={20} />}
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
                    <IconButton disabled sx={{ color: '#13183e' }} aria-label="delete">
                        <BsGrid size={'20px'} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Setting" placement="bottom">
                    <IconButton disabled sx={{ color: '#13183e' }} aria-label="setting">
                        <AiOutlineSetting size={'20px'} />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    className={themeDark === 'false' ? styles.account_logo : styles.account_logo_dark}
                    title="Profile"
                    placement="bottom">
                    <div>
                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%' }}>
                            <Image objectFit='cover' height={200} width={200} src={avatar} alt='user' />
                        </Box>
                        <button
                            className={styles.header_right_single_logo}>
                            <LiaUserCogSolid />
                        </button>
                    </div>
                </Tooltip>
                <div>

                </div>
            </div>
        </header>
    )
}
