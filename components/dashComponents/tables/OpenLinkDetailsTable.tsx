import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    Parameter: string,
    Description: string,
    Example: string,
) {
    return { Parameter, Description, Example };
}

const rows = [
    createData('{payout}', 'Amount paid to you for conversion', '61.59'),
    createData('{country}', 'Country name of transaction', 'US'),
    createData('{platform}', 'Platform of transaction', 'Mob'),
    createData('{clickid}', 'Your click/transaction ID', ''),
    createData('{date} {time} {dateTime}', 'Datetime of transaction', '016-04-28 7:14:59'),
    createData('{subid}	', 'Additional parameter (to mark your sources/any additional information)', ''),
    createData('{subid2}', 'Your own additional parameter 3', ''),
    createData('{conversionType}', 'Transaction type ("lead", "sale", "install", "confirm")', 'Lead'),
    createData('{tds_cid}', 'Internal click_id', ''),
    createData('{payout_in_currency}', 'Amount paid to you for conversion in offer currency', ''),
    createData('{currency}', 'Offer currency', ''),
];

export default function OpenLinkDetailsTable() {
    return (
        <TableContainer sx={{ borderRadius: '6px', backgroundColor: '#141a27' }} component={Paper}>
            <Table sx={{ minWidth: 650, borderRadius: '6px' }} aria-label="simple table">
                <TableHead
                    sx={{
                        backgroundColor: '#27374D',
                    }} >
                    <TableRow>
                        <TableCell sx={{ fontSize: '1.2rem', color: 'lightGrey', fontWidth: 600, borderBottom: 0 }}>Parameter</TableCell>
                        <TableCell sx={{ fontSize: '1.2rem', color: 'lightGrey', fontWidth: 600, borderBottom: 0 }} align="left">Description</TableCell>
                        <TableCell sx={{ fontSize: '1.2rem', color: 'lightGrey', fontWidth: 600, borderBottom: 0 }} align="left">Example</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.Parameter}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    borderBottom: 0,
                                }
                            }}
                        >
                            <TableCell sx={{ fontSize: '1rem', width: '20%', color: '#ED7D31', borderBottom: '1px solid #121622' }} component="th" scope="row">
                                {row.Parameter}
                            </TableCell>
                            <TableCell sx={{ fontSize: '1rem', width: '40%', color: 'lightGrey', textAlign: 'left', borderBottom: '1px solid #121622', }} align="center">{row.Description}</TableCell>
                            <TableCell sx={{ fontSize: '1rem', width: '20%', color: 'lightGrey', borderBottom: '1px solid #121622' }} align="left">{row.Example}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}