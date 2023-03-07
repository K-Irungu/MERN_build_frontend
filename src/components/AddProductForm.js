import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MenuItem } from '@mui/material';


export default function AddProductForm({ handleClose, setProducts }) {

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const congfigurationObj = {
            name: data.get('name'),
            price: data.get('price'),
            discount: data.get('discount'),
            sponsored: data.get('sponsored'),
            description: data.get('description'),
            rating: data.get('rating'),
            imageUrl: data.get('imageUrl'),
        }

        console.log(congfigurationObj)

        fetch("https://mern-build-backend-2.onrender.com/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(congfigurationObj)
        })
        .then(fetch("https://mern-build-backend-2.onrender.com")
        .then((res) => res.json())
        .then((data) => setProducts(data)))
        handleClose();
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5"> Add New Product </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="price"
                                label="Price"
                                type="price"
                                id="price"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="discount"
                                label="Discount"
                                type="discount"
                                id="discount"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                                select
                                required
                                fullWidth
                                name="sponsored"
                                label="Sponsored"
                                type="sponsored"
                                id="sponsored"
                            >
                                <MenuItem key="Yes" value="Yes"> Yes </MenuItem>
                                <MenuItem key="No" value="No"> No </MenuItem>


                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="description"
                                label="Description"
                                type="description"
                                id="description"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                                select
                                required
                                fullWidth
                                name="rating"
                                label="Rating"
                                type="rating"
                                id="rating"
                            >
                                <MenuItem key="1" value="1"> 1 </MenuItem>
                                <MenuItem key="2" value="2"> 2 </MenuItem>
                                <MenuItem key="3" value="3"> 1 </MenuItem>
                                <MenuItem key="4" value="4"> 2 </MenuItem>
                                <MenuItem key="5" value="5"> 1 </MenuItem>

                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="imageUrl"
                                label="ImageUrl"
                                type="imageUrl"
                                id="imageUrl"
                            />
                        </Grid>

                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 1 }}
                        background-color="inherit"
                        color="inherit"
                    >
                        ADD PRODUCT
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
            </Box>
        </Container>
    );
}