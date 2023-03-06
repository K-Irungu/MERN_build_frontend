import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    return (
        <Box >
            <AppBar sx={{ backgroundColor: "#333333"}} position="absolute">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}> Tech Essentials </Typography>
                    <Button color="inherit"> Logout </Button>
                    <LogoutIcon />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;