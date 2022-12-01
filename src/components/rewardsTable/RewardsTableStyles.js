import { makeStyles } from 'tss-react/mui';

export const TableContainerStyles = makeStyles({ "name": "RewardsTableContainer" })(theme => ({
    grid: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 10,
    },
    tableContainer: {
        backgroundColor: '#282C34',
        overflowX: 'auto'
    }
}))

export const TableStyles = makeStyles({ "name": "RewardsTable" })(theme => ({
    tableHead: {
        '& .MuiTableCell-root': {
            textAlign: 'center',
            color: 'burlywood',
            fontSize: 20,
            [theme.breakpoints.down("md")]: {
                fontSize: 18,
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: 15,
                padding: 3,
            }
        },
    },
    tableBody: {
        '& .MuiTableCell-root': {
            textAlign: 'center',
            color: '#fff',
            fontSize: 18,
            [theme.breakpoints.down("md")]: {
                fontSize: 16,
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: 14,
                padding: 2,
            },
        },
    },
}))