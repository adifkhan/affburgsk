'use client'
import { Avatar, Badge, Box, Button, Divider, IconButton, List, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Paper, Popover, Tooltip, Typography, styled } from '@mui/material'
import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { Dispatch, SetStateAction, useState } from 'react';
import { formatDistanceToNow, set, sub } from 'date-fns';
import { BiMessageRoundedCheck, BiMessageRoundedDots } from 'react-icons/bi';
import { TbShoppingCartCheck } from 'react-icons/tb';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { FiMail } from 'react-icons/fi';
import { useAppSelector } from '@/app/GlobalRedux/store';


// const StyledBbadge = styled(Badge)(({ theme }) => ({
//     '& .MuiBadge-badge': {
//         backgroundColor: '#36a689',
//         color: '#36a689',
//         boxShadow: `0 0 0 2px #121622`,
//         '&::after': {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             borderRadius: '50%',
//             animation: 'ripple 1.2s infinite ease-in-out',
//             border: '1px solid currentColor',
//             content: '""',
//         },
//     },
//     '@keyframes ripple': {
//         '0%': {
//             transform: 'scale(.8)',
//             opacity: 1,
//         },
//         '100%': {
//             transform: 'scale(2.4)',
//             opacity: 0,
//         },
//     },
// }));

const NOTIFICATIONS = [
    {
        id: 1,
        title: 'Your order is placed',
        description: 'waiting for shipping',
        avatar: null,
        type: 'order_placed',
        createdAt: set(new Date(), { hours: 10, minutes: 30 }),
        isUnRead: true,
    },
    {
        id: 2,
        title: 'Adolla Grry',
        description: 'answered to your comment on the Minimal',
        avatar: '/assets/images/avatars/avatar_2.jpg',
        type: 'friend_interactive',
        createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
        isUnRead: true,
    },
    {
        id: 3,
        title: 'You have new message',
        description: '5 unread messages',
        avatar: null,
        type: 'chat_message',
        createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
        isUnRead: false,
    },
    {
        id: 4,
        title: 'You have new mail',
        description: 'sent from Guido Padberg',
        avatar: null,
        type: 'mail',
        createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
        isUnRead: false,
    },
    {
        id: 5,
        title: 'Delivery processing',
        description: 'Your order is being shipped',
        avatar: null,
        type: 'order_shipped',
        createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
        isUnRead: false,
    },
    {
        id: 6,
        title: 'Delivery processing',
        description: 'Your order is being shipped',
        avatar: null,
        type: 'order_shipped',
        createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
        isUnRead: false,
    },
    {
        id: 7,
        title: 'Delivery processing',
        description: 'Your order is being shipped',
        avatar: null,
        type: 'order_shipped',
        createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
        isUnRead: false,
    },
];


type BadgeOpenProps = {
    badgeOpen: boolean;
    setBadgeOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Notification({ badgeOpen, setBadgeOpen }: BadgeOpenProps) {
    const [notifications, setNotifications] = useState(NOTIFICATIONS);
    const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;
    const [open, setOpen] = useState(null);

    //for Redux state
    const themeDark = useAppSelector((state) => state.themeReducer.theme);



    const handleOpen = (event: any) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleMarkAllAsRead = () => {
        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                isUnRead: false,
            }))
        );
        setBadgeOpen(!badgeOpen);
    };

    return (
        <>
            <Tooltip
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'false' : undefined}
                onClick={handleOpen}
                title="Notifications"
                placement="bottom">
                <Box sx={{ position: 'relative' }}>
                    <Box
                        component="span"
                        sx={{
                            bgcolor: 'none',
                            width: 30,
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontSize: { xs: '14px', md: '20px' }
                        }}>
                        <IoMdNotificationsOutline />
                    </Box>
                    <Badge
                        sx={{
                            position: 'absolute',
                            top: 5,
                            right: 5
                        }}
                        invisible={!badgeOpen}
                        color="info"
                        variant="dot"
                    />
                </Box>
            </Tooltip>
            <Popover
                // disableScrollLock
                open={!!open}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}

                sx={themeDark === 'true' ? {
                    '& .MuiPaper-root': {
                        marginTop: '25px',
                        // borderRadius: '10px',
                        backgroundColor: '#1C2437',
                    }
                } : {
                    '& .MuiPaper-root': {
                        marginTop: '25px',
                        // borderRadius: '10px',
                        backgroundColor: 'whiteSmoke',
                    }
                }
                }>
                <Paper
                    sx={{
                        backgroundColor: '#F9F9F9',
                        width: { xs: '350px', md: '400px', lg: '450px' },
                        height: '80vh',
                        overflowY: 'scroll',
                        '&::-webkit-scrollbar': { width: 6 },
                        '&::-webkit-scrollbar-track': { background: 'none' },
                        '&::-webkit-scrollbar-thumb': { backgroundColor: '#969696', borderRadius: ' 20px' },
                    }}>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', py: 2, px: 1 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{ color: '#7752FE', fontSize: { xs: 14, md: 16 } }}>
                                Notifications
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: 'darkgray', fontSize: { xs: 12, md: 14 } }}>
                                You have {totalUnRead} unread messages
                            </Typography>
                        </Box>

                        {totalUnRead > 0 && (
                            <Tooltip title="Mark all as read">
                                <IconButton
                                    sx={{ color: '#7752FE', fontSize: { xs: '1.2rem', md: '1.2rem', lg: '1.5rem' } }}
                                    onClick={handleMarkAllAsRead}>
                                    <BiMessageRoundedCheck />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                    <Divider sx={{ borderStyle: 'dashed' }} />
                    <Box
                        component={'div'}
                        sx={{ height: { xs: 340, sm: 'auto' } }}>
                        <List
                            disablePadding
                            subheader={
                                <ListSubheader
                                    disableSticky
                                    sx={themeDark === 'false' ?
                                        {
                                            py: 1,
                                            px: 2.5,
                                            typography: 'overline',
                                            color: '#7752FE',
                                            fontWeight: 600,
                                            fontSize: { xs: 12, }
                                        }
                                        :
                                        {
                                            color: '#36a689',
                                            fontWeight: 600,
                                            fontSize: { xs: 12, }, py: 1,
                                            px: 2.5, typography: 'overline'
                                        }}>
                                    New
                                </ListSubheader>
                            }>
                            {notifications.slice(0, 2).map((notification) => (
                                <NotificationItem
                                    themeDark={themeDark}
                                    key={notification.id}
                                    notification={notification}
                                />
                            ))}
                        </List>

                        <List
                            disablePadding
                            subheader={
                                <ListSubheader
                                    disableSticky
                                    sx={themeDark === 'false' ?
                                        {
                                            py: 1,
                                            px: 2.5,
                                            typography: 'overline',
                                            color: '#7752FE',
                                            fontWeight: 600,
                                            fontSize: { xs: 12 }
                                        }
                                        :
                                        {
                                            color: '#36a689',
                                            fontWeight: 600,
                                            fontSize: { xs: 12 },
                                            py: 1,
                                            px: 2.5,
                                            typography: 'overline'
                                        }}>
                                    Before that
                                </ListSubheader>
                            }
                        >
                            {notifications.slice(2, 5).map((notification) => (
                                <NotificationItem
                                    themeDark={themeDark}
                                    key={notification.id}
                                    notification={notification}
                                />
                            ))}
                        </List>
                    </Box>
                </Paper>
                {/* <Divider sx={{ borderStyle: 'dashed' }} /> */}
                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        style={{ backgroundColor: '#7752FE', color: 'white', width: '100%', borderRadius: 0 }}
                        sx={{ bgcolor: 'red' }}>
                        View All
                    </Button>
                </Box>
            </Popover>
        </>
    )
}

function NotificationItem({ notification, themeDark }: any) {
    const { avatar, title } = renderContent(notification, themeDark);

    return (
        <ListItemButton
            sx={themeDark === 'false' ? {
                py: 1,
                px: 2,
                mt: '1px',
                color: '#1c2437',
                ...(notification.isUnRead && {
                    bgcolor: 'action.selected',
                }),
            } : { color: 'whiteSmoke' }
            }
        >
            <ListItemAvatar>
                <Avatar
                    sx={themeDark === 'false' ?
                        {
                            bgcolor: '#7752FE',
                            color: 'whiteSmoke',
                            height: { xs: '30px', md: '35px' },
                            width: { xs: '30px', md: '35px' }
                        }
                        :
                        {
                            bgcolor: '#36a689',
                            height: { xs: '30px', md: '35px' },
                            width: { xs: '30px', md: '35px' }
                        }}>
                    {avatar}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <Typography
                        variant="caption"
                        sx={themeDark === "false" ? {
                            mt: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.disabled',
                            columnGap: '2px'
                        } : {
                            mt: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '2px',
                            color: '#36a689'
                        }}
                    >
                        <AiOutlineClockCircle />
                        {formatDistanceToNow(notification.createdAt)}
                    </Typography>
                }
            />
        </ListItemButton>
    );
}

// ----------------------------------------------------------------------

function renderContent(notification: any, themeDark: any) {
    const title = (
        <Typography variant="subtitle2" sx={{ fontSize: { xs: 12, md: 14 } }}>
            {notification.title}
            <Typography
                component="span"
                variant="body2"
                sx={themeDark === 'false' ?
                    {
                        color: 'text.secondary',
                        fontSize: { xs: 12, md: 14 }
                    }
                    :
                    {
                        color: 'Grey',
                        fontSize: { xs: 12, md: 14 }
                    }}>
                &nbsp; {notification.description}
            </Typography>
        </Typography>
    );

    if (notification.type === 'order_placed') {
        return {
            avatar: <TbShoppingCartCheck />,
            title,
        };
    }
    if (notification.type === 'order_shipped') {
        return {
            avatar: <LiaShippingFastSolid />,
            title,
        };
    }
    if (notification.type === 'mail') {
        return {
            avatar: <FiMail />,
            title,
        };
    }
    if (notification.type === 'chat_message') {
        return {
            avatar: <BiMessageRoundedDots />,
            title,
        };
    }
    return {
        avatar: notification.avatar ? <Box component={'span'}>{notification.avatar}</Box> : null,
        title,
    };
}