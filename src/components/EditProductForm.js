import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function EditProductForm({ handleClose }) {

    const handleSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get('name')
        const price = data.get('price')
        const discount = data.get('discount')
        const sponsored = data.get('sponsored')
        const description = data.get('description')
        const rating = data.get('rating')
        const imageUrl = data.get('imageUrl')

        fetch("http://localhost:5000/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id: localStorage.getItem("productId"),
                name: name === "" ? localStorage.getItem('name') : name,
                price: price === "" ? localStorage.getItem('price') : price,
                discount: discount === "" ? localStorage.getItem('discount') : discount,
                sponsored: sponsored === "" ? localStorage.getItem('sponsored') : sponsored,
                description: description === "" ? localStorage.getItem('description') : description,
                rating: rating === "" ? localStorage.getItem('rating') : rating,
                imageUrl: imageUrl === "" ? localStorage.getItem('imageUrl') : imageUrl
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
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
                                autoComplete="name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                fullWidth
                                name="price"
                                label="price"
                                type="price"
                                id="price"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                fullWidth
                                name="discount"
                                label="Discount"
                                type="discount"
                                id="discount"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                fullWidth
                                name="sponsored"
                                label="Sponsored"
                                type="sponsored"
                                id="sponsored"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                fullWidth
                                name="description"
                                label="Description"

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                fullWidth
                                name="rating"
                                label="Rating (1-5)"
                                type="rating"
                                id="rating"
                            />


                        </Grid>
                        <Grid item xs={12}>
                            <TextField

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