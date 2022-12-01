import React, { useState, useEffect } from 'react';
import { Paper, TableContainer, Container, Grid } from '@mui/material';
import { TableContainerStyles } from './RewardsTableStyles';
import { useQuery } from '@apollo/client';
import { GET_AllCustomers } from "../../gql/customer";
import { getTotalMonthlyPoints } from './RewardsTableUtil';
import RewardsTable from './RewardsTable';

const RewardsTableContainer = () => {

    const { classes } = TableContainerStyles();
    const [rewardsTableData, setRewardsTableData] = useState([]);
    // fetch data asynchronously using graphQL useQuery hook
    const { error, data } = useQuery(GET_AllCustomers, { fetchPolicy: "no-cache" });

    useEffect(() => {
        if (data?.allCustomers) {
            processCustomerTxnData(data.allCustomers);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, data])
  
    // Process the customer transaction data and build a state variable with all the data needed to pass to the table
    const processCustomerTxnData = (customersRewardsData) => {
        customersRewardsData.forEach((customer) => {
            customer.rewardsMonth1 = getTotalMonthlyPoints(customer.transactions.Month1);
            customer.rewardsMonth2 = getTotalMonthlyPoints(customer.transactions.Month2);
            customer.rewardsMonth3 = getTotalMonthlyPoints(customer.transactions.Month3);
            customer.totalPoints =  customer.rewardsMonth1 +  customer.rewardsMonth2 +  customer.rewardsMonth3;
        })
        setRewardsTableData(customersRewardsData);
    }

    return (
        <Container maxWidth="xl">
            {!error ? (
                <Grid container className={classes.grid}>
                    <Grid item lg={8} md={12} sm={12} xs={12}>
                        <TableContainer component={Paper} className={classes.tableContainer}>
                            <RewardsTable rewardsTableData={rewardsTableData} />
                        </TableContainer>
                    </Grid>
                </Grid>

            ) : <p data-testid="error">{error.message}</p>}
        </Container>
    );
}

export default RewardsTableContainer;
