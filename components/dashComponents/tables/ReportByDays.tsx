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
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import { LuListFilter } from 'react-icons/lu';
import { AiOutlineDelete } from 'react-icons/ai';


interface Data {
    id: number;
    Date: string;
    Clicks: number;
    Registrations: number;
    Confirms: number;
    Installs: number;
    Sales: number;
    Click2Reg: number;
    Reg2Conf: number;
    Reg2Sale: number;
    EPC: number;
    Revenue: number,
}

function createData(
    id: number,
    Date: string,
    Clicks: number,
    Registrations: number,
    Confirms: number,
    Installs: number,
    Sales: number,
    Click2Reg: number,
    Reg2Conf: number,
    Reg2Sale: number,
    EPC: number,
    Revenue: number,
): Data {
    return {
        id,
        Date,
        Clicks,
        Registrations,
        Confirms,
        Installs,
        Sales,
        Click2Reg,
        Reg2Conf,
        Reg2Sale,
        EPC,
        Revenue
    };
}

const rows = [
    createData(1, '1-02-2023', 305, 3, 67, 4, 45, 987, 654, 22, 78.00, 98.10),
    createData(2, '2-02-2023', 452, 25, 51, 4, 45, 987, 654, 22, 78.00, 98.10),
    createData(3, '3-02-2023', 262, 16, 24, 6, 45, 987, 654, 22, 78.00, 98.10),
    createData(4, '4-02-2023', 159, 6, 24, 4, 45, 987, 654, 22, 78.00, 98.10),
    createData(5, '5-02-2023', 356, 16, 49, 3, 45, 987, 654, 22, 78.00, 98.10),
    createData(6, '6-02-2023', 408, 3., 87, 6, 45, 987, 654, 22, 78.00, 98.10),
    createData(7, '7-02-2023', 237, 9., 37, 4, 45, 987, 654, 22, 78.00, 98.10),
    createData(8, '8-02-2023', 375, 0, 94, 0, 45, 987, 654, 22, 78.00, 98.10),
    createData(9, '9-02-2023', 518, 26, 65, 7, 45, 987, 654, 22, 78.00, 98.10),
    createData(10, '10-02-2023', 392, 0, 98, 0, 45, 987, 654, 22, 78.00, 98.10),
    createData(11, '11-02-2023', 318, 0, 81, 2, 45, 987, 654, 22, 78.00, 98.10),
    createData(12, '12-02-2023', 360, 19, 9, 37, 45, 987, 654, 22, 78.00, 98.10),
    createData(13, '13-02-2023', 437, 18, 63, 4, 45, 987, 654, 22, 78.00, 98.10),
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
    id: keyof Data;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'Date',
        numeric: false,
        disablePadding: true,
        label: 'Date',
    },
    {
        id: 'Clicks',
        numeric: true,
        disablePadding: false,
        label: 'Clicks',
    },
    {
        id: 'Registrations',
        numeric: true,
        disablePadding: false,
        label: 'Registrations',
    },
    {
        id: 'Confirms',
        numeric: true,
        disablePadding: false,
        label: 'Confirms',
    },
    {
        id: 'Installs',
        numeric: true,
        disablePadding: false,
        label: 'Installs',
    },
    {
        id: 'Sales',
        numeric: true,
        disablePadding: false,
        label: 'Sales',
    },
    {
        id: 'Click2Reg',
        numeric: true,
        disablePadding: false,
        label: 'Click2Reg',
    },
    {
        id: 'Reg2Conf',
        numeric: true,
        disablePadding: false,
        label: 'Reg2Conf',
    },
    {
        id: 'Reg2Sale',
        numeric: true,
        disablePadding: false,
        label: 'Reg2Sale',
    },
    {
        id: 'EPC',
        numeric: true,
        disablePadding: false,
        label: 'EPC',
    },
    {
        id: 'Revenue',
        numeric: true,
        disablePadding: false,
        label: 'Revenue',
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow
                sx={{
                    "& th": {
                        color: 'lightGrey',
                        fontSize: '1rem',
                        // fontWeight: '500',
                        borderColor: '#2b3855'
                    }
                }}
            >
                <TableCell padding="checkbox">
                    <Checkbox
                        sx={{
                            color: 'lightGrey',
                            '&.Mui-checked': {
                                color: '#36a689',
                            },
                        }}
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
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
    numSelected: number;
    dense: boolean;
    handleChangeDense: any;
    rowsPerPage: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected, dense, handleChangeDense, rowsPerPage } = props;

    return (
        <Toolbar
            disableGutters={true}
            variant="dense"
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },

                ...(numSelected > 0 && {
                    bgcolor: '#36a689',
                    borderRadius: '8px 8px 0 0',
                }),
                // '&.MuiToolbar-root': {
                //     minHeight: 20, height: 20,
                // }
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%', fontFamily: 'Dosis', fontSize: '1.2rem', letterSpacing: '.1ch', fontWidth: '700' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%', fontSize: '1rem', }}
                    variant="h1"
                    id="tableTitle"
                    component="div"
                >
                    Report for last {rowsPerPage} days
                </Typography>
            )}
            <FormControlLabel
                label=''
                control={<Tooltip title='Less padding'><Switch color="default" size="small" checked={dense} onChange={handleChangeDense} /></Tooltip>}
            />
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <AiOutlineDelete color='whiteSmoke' />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <LuListFilter color='whiteSmoke' />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar >
    );
}
export default function ReportByDays() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('Date');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

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
            <Paper sx={{ width: '100%', mb: 2, backgroundColor: '#383B8C', borderRadius: '8px 8px 9px 9px', color: 'lightgrey', fontFamily: 'Dosis' }}>
                <EnhancedTableToolbar numSelected={selected.length} dense={dense} handleChangeDense={handleChangeDense} rowsPerPage={rowsPerPage} />
                <TableContainer>
                    <Table
                        sx={{
                            minWidth: 650, backgroundColor: '#1c2437', color: 'lightgrey',
                            "&::-webkit-scrollbar": {
                                display: 'none'
                            },
                        }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody sx={{ color: 'lightGrey', backgroundColor: '#1c2437', borderBottom: '1px solid #2b3855' }}>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
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
                                            padding="checkbox">
                                            <Checkbox
                                                sx={{
                                                    color: 'lightGrey',
                                                    '&.Mui-checked': {
                                                        color: '#36a689',
                                                    },
                                                }}
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            sx={{ color: 'lightGrey', fontSize: '.9rem', fontFamily: 'Dosis', maxWidth: '50px', letterSpacing: '.1ch', whiteSpace: 'nowrap' }}
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.Date}
                                        </TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.9rem', fontWidth: '600', fontFamily: 'Dosis', maxWidth: '50px' }} align="right">{row.Clicks}</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.9rem', fontWidth: '600', fontFamily: 'Dosis', maxWidth: '50px' }} align="right">{row.Registrations}</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.9rem', fontWidth: '600', fontFamily: 'Dosis', maxWidth: '50px' }} align="right">{row.Confirms}</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.9rem', fontWidth: '600', fontFamily: 'Dosis', maxWidth: '50px' }} align="right">{row.Installs}</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.9rem', fontWidth: '600', fontFamily: 'Dosis', maxWidth: '50px' }} align="right">{row.Sales}</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.9rem', fontWidth: '600', fontFamily: 'Dosis', maxWidth: '50px' }} align="right">{row.Click2Reg}</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.9rem', fontWidth: '600', fontFamily: 'Dosis', maxWidth: '50px' }} align="right">{row.Reg2Conf}</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.9rem', fontWidth: '600', fontFamily: 'Dosis', maxWidth: '50px' }} align="right">{row.Reg2Sale}</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.9rem', fontWidth: '600', fontFamily: 'Dosis', maxWidth: '50px' }} align="right">{row.EPC} $</TableCell>
                                        <TableCell sx={{ color: 'lightGrey', fontSize: '.9rem', fontWidth: '600', fontFamily: 'Dosis', maxWidth: '50px' }} align="right">{row.Revenue} $</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    sx={{
                        color: 'lightGrey', bgcolor: '#1c2437', borderRadius: '0 0 8px 8px',
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
