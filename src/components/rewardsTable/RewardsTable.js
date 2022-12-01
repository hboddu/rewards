import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { TableStyles } from './RewardsTableStyles';

const RewardsTable = ({ rewardsTableData }) => {

    const { classes } = TableStyles();

    return (
        <Table size="medium" aria-label="a dense table">
            <TableHead className={classes.tableHead}>
                <TableRow>
                    <TableCell align="center" colSpan={2} data-testid="customers">
                        Customers
                    </TableCell>
                    <TableCell align="center" colSpan={4} data-testid="reward">
                        Reward Points
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{ color: 'burlywood' }} data-testid="id">ID</TableCell>
                    <TableCell data-testid="name">Name</TableCell>
                    <TableCell data-testid="month1">Month1</TableCell>
                    <TableCell data-testid="month2">Month2</TableCell>
                    <TableCell data-testid="month3">Month3</TableCell>
                    <TableCell data-testid="total">Total Points</TableCell>
                </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
                {rewardsTableData?.map((item, index) => {
                    return (
                        <TableRow key={index} data-testid="tabledata">
                            <TableCell>{index + 1}</TableCell>
                            <TableCell data-testid="customer_name">{item.customer_name}</TableCell>
                            <TableCell data-testid="rewardsMonth1">{item.rewardsMonth1}</TableCell>
                            <TableCell data-testid="rewardsMonth2">{item.rewardsMonth2}</TableCell>
                            <TableCell data-testid="rewardsMonth3">{item.rewardsMonth3}</TableCell>
                            <TableCell data-testid="totalPoints">{item.totalPoints}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    );
}

export default RewardsTable;
