import React from 'react';
import { Box, Typography } from '@mui/material';
import  HeaderStyles from './HeaderStyles';

const Header = () => {

    const { classes } = HeaderStyles();

    return (
        <Box>
            <Typography className={classes.headline} variant='h1' data-testid="header_text">Quarterly Rewards Statement</Typography>
        </Box>
    )
}

export default Header;