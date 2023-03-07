import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



const ProductCard = ({ productDetails, handleEdit, handleDelete }) => {

    const product = productDetails

    return (
        <Card sx={{ maxWidth: 300, borderStyle: "solid", borderColor: "#999999", borderRadius: "5px", borderWidth: "1.9px", p: 2, mt: 2, mr: 2 }}>
            {/* Product Image, Sponsored */}
            <CardMedia
                sx={{ height: 250, width: 285, borderRadius: "5px", p: 1 }}
                image={product.imageUrl}
                title="product"
            >
                {product.sponsored === "yes" || product.sponsored === "Yes" ?
                    <Box sx={{ maxWidth: "30%", borderRadius: "40px", borderWidth: "1.9px", backgroundColor: "#999999" }}>
                        <Typography variant="body2" color="inherit" sx={{ p: 0.5, textAlign: "center" }}> Sponsored </Typography>
                    </Box>
                    :
                    <></>}
            </CardMedia>

            {/* Product Name, Price, Description */}
            <CardContent sx={{ height: 230 }}>
                <Typography gutterBottom variant="h6" > {product.name} </Typography>
                {product.discount > 0 ?
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Typography gutterBottom variant="h6" sx={{ textDecoration: "line-through" }}> ${product.price}  </Typography>
                        <Typography gutterBottom sx={{ ml: 1 }} variant="h6"> ${(product.price - product.discount)}  </Typography>
                    </Box>
                    : <Typography gutterBottom variant="h6" > ${product.price} </Typography>}
                <Typography gutterBottom variant="body2" color="text.secondary"> {product.description} </Typography>
                <Rating
                    value={product.rating}
                    readOnly
                />
            </CardContent>

            <CardActions>
                <Button size="small" variant="contained" color="inherit" startIcon={<EditIcon />} onClick={() => handleEdit(product)} >Edit</Button>
                <Button size="small" variant="contained" color="inherit" startIcon={<DeleteIcon />} onClick={() => handleDelete(product._id)} >Delete</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard