import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function DeleteProductForm({ handleClose }) {

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: "center"
                }}
            >
                <Typography component="h1" variant="h5" > Are you sure you want to delete this product? </Typography>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 1 }}
                    onClick={
                        () => {
                            fetch("https://mern-build-backend-2.onrender.com/delete", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    _id: localStorage.getItem("productId")
                                })
                            })
                            handleClose();
                        }
                    }
                    background-color="inherit"
                    color="inherit"
                >
                    YES, I'M SURE
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                    onClick={handleClose}
                    background-color="inherit"
                    color="inherit"
                >
                    BACK TO PRODUCTS
                </Button>


            </Box>
        </Container>
    );
}