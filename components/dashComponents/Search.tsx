import React from 'react'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { IoSearchOutline } from 'react-icons/io5';

type ThemeProps = {
    themeDark: string | null;
}
export default function Search({ themeDark }: ThemeProps) {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: `${themeDark === 'false' ? '#D8DADF' : '#1c2437'}`,
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        fontSize: '1rem',
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon

            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '20ch',
                '&:focus': {
                    width: '25ch',
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
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </>
    )
}
