import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { DepositTableDataType } from '@/types/models';
import GlobalSearch from '../GlobalSearch';


const rows: DepositTableDataType[] = [
    {
        id: '111111',
        date: '10-01-2024',
        creditDebit: 'test affiliate',
        type: 'test affiliate',
        transactionID: 'test affiliate',
        status: 'Active',
        invoice: 'test affiliate',
    },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    id: keyof DepositTableDataType;
    label: string;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'date',
        label: 'Date',
    },
    {
        id: 'creditDebit',
        label: 'Credit/Debit',
    },
    {
        id: 'type',
        label: 'Type',
    },
    {
        id: 'transactionID',
        label: 'Transaction ID',
    },
    {
        id: 'invoice',
        label: 'Invoice',
    },
];

interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof DepositTableDataType) => void;
    order: Order;
    orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof DepositTableDataType) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow
                sx={{
                    "& th": {
                        color: 'lightGrey',
                        fontSize: '.9rem',
                        borderColor: '#2b3855'
                    }
                }}
            >
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            sx={
                                {
                                    '&.MuiTableSortLabel-root': {
                                        color: 'white',
                                    },
                                    '&.MuiTableSortLabel-root:hover': {
                                        color: '#ED7D31',
                                    },
                                    '&.Mui-active': {
                                        color: '#ED7D31',
                                    },
                                    '& .MuiTableSortLabel-icon': {
                                        color: '#ED7D31 !important',
                                    },
                                }
                            }
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

interface EnhancedTableToolbarProps {
    rowsPerPage: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { rowsPerPage } = props;

    return (
        <Toolbar
            disableGutters={true}
            variant="dense"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                pl: { xs: 2 },
                pr: { xs: 1, sm: 1 },
            }}
        >
            <Typography
                sx={{ flex: '1 1 100%', fontSize: { xs: '.8rem' }, }}
                variant="h1"
                id="tableTitle"
            >
                Report for last {rowsPerPage} days
            </Typography>
            <GlobalSearch />
        </Toolbar >
    );
}
export default function DepositTable() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof DepositTableDataType>('id');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof DepositTableDataType,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box sx={{ width: '100%', }}>
            <Paper sx={{ width: '100%', mb: 2, backgroundColor: '#383B8C', borderRadius: 1, color: 'lightgrey', fontFamily: 'Dosis' }}>
                <EnhancedTableToolbar rowsPerPage={rowsPerPage} />
                <TableContainer>
                    <Table
                        size='small'
                        sx={{
                            minWidth: 650,
                            backgroundColor: '#1c2437',
                            color: 'lightgrey',
                            "&::-webkit-scrollbar": {
                                display: 'none'
                            },
                        }}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody sx={{ color: 'lightGrey', backgroundColor: '#1c2437', borderBottom: '1px solid #2b3855' }}>
                            {visibleRows.map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;
                                return (
                                    <TableRow
                                        tabIndex={-1}
                                        key={row.id}
                                        sx={{
                                            // '&.MuiTableRow-root': {
                                            //     color: 'red'
                                            // },
                                            "&:hover": {
                                                backgroundColor: "#121622",
                                            },
                                            cursor: 'pointer',
                                            "& td": {
                                                borderColor: '#2b3855'
                                            },
                                            "& th": {
                                                borderColor: '#2b3855'
                                            },
                                        }}
                                    >
                                        <TableCell
                                            sx={{ color: 'lightGrey', fontSize: '.8rem', maxWidth: '50px', letterSpacing: '.1ch', whiteSpace: 'nowrap' }}
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                        >
                                            {row.date}
                                        </TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.8rem', }} align="left">{row.creditDebit}</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.8rem', }} align="left">{row.type}</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.8rem', }} align="left">{row.transactionID}</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.8rem', }} align="left">{row.invoice}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    sx={{
                        color: 'lightGrey',
                        bgcolor: '#1c2437',
                        borderRadius: '0 0 4px 4px',
                        '.MuiSvgIcon-root': {
                            fill: 'lightGrey',
                        },
                        '.Mui-disabled': {
                            opacity: '.3',
                        },
                    }}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
