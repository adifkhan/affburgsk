import React from 'react'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { IoSearchOutline } from 'react-icons/io5';


export default function GlobalSearch() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#1c2437',
        display: 'flex',
        alignItems: 'center',
        height: '30px',
        fontSize: 14,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 1.5),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        fontSize: '.8rem',
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),

            paddingLeft: `calc(1em + ${theme.spacing(3)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('xs')]: {
                width: '8ch',
                '&:focus': {
                    width: '18ch',
                },
            },
        },
    }));

    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <IoSearchOutline />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </>
    )
}