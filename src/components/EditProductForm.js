import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MenuItem } from '@mui/material';

export default function EditProductForm({ handleClose, setProducts }) {

    const previousName = localStorage.getItem('name')
    const previousPrice = localStorage.getItem('price')
    const previousDiscount = localStorage.getItem('discount')
    const previousSponsored = localStorage.getItem('sponsored')
    const previousDescription = localStorage.getItem('description')
    const previousRating = localStorage.getItem('rating')
    const previousImageUrl = localStorage.getItem('imageUrl')

    const handleSubmit = (event) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const newName = data.get('name')
        const newPrice = data.get('price')
        const newDiscount = data.get('discount')
        const newSponsored = data.get('sponsored')
        const newDescription = data.get('description')
        const newRating = data.get('rating')
        const newImageUrl = data.get('imageUrl')

        const configurationObject = {
            _id: localStorage.getItem("productId"),
            name: newName === "" ? previousName : newName,
            price: newPrice === "" ? previousPrice : newPrice,
            discount: newDiscount === "" ? previousDiscount : newDiscount,
            sponsored: newSponsored === "" ? previousSponsored : newSponsored,
            description: newDescription === "" ? previousDescription : newDescription,
            rating: newRating === "" ? previousRating : newRating,
            imageUrl: newImageUrl === "" ? previousImageUrl : newImageUrl
        }

        fetch("https://mern-build-backend-2.onrender.com/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(configurationObject)
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
                <Typography component="h1" variant="h5"> Edit Product </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="Name"
                                defaultValue={previousName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                fullWidth
                                name="price"
                                label="Price"
                                type="price"
                                id="price"
                                defaultValue={previousPrice}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                fullWidth
                                name="discount"
                                label="Discount"
                                type="discount"
                                id="discount"
                                defaultValue={previousDiscount}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                select
                                fullWidth
                                name="sponsored"
                                label="Sponsored"
                                type="sponsored"
                                id="sponsored"
                                defaultValue={previousSponsored}
                            >
                                <MenuItem key="Yes" value="Yes"> Yes </MenuItem>
                                <MenuItem key="No" value="No"> No </MenuItem>


                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="description"
                                label="Description"
                                defaultValue={previousDescription}
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
                                defaultValue={previousRating}
                            >
                                <MenuItem key="1" value="1"> 1 </MenuItem>
                                <MenuItem key="2" value="2"> 2 </MenuItem>
                                <MenuItem key="3" value="3"> 3 </MenuItem>
                                <MenuItem key="4" value="4"> 4 </MenuItem>
                                <MenuItem key="5" value="5"> 5 </MenuItem>

                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="imageUrl"
                                label="ImageUrl"
                                type="imageUrl"
                                id="imageUrl"
                                defaultValue={previousImageUrl}
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
                        SAVE
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