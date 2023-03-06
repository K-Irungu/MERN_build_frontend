import React from 'react';
import Navbar from './components/Navbar';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Button from "@mui/material/Button"
import ProductCard from './components/ProductCard';
import Modal from '@mui/material/Modal';
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';
import DeleteProductForm from './components/DeleteProductForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const App = () => {

  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState();
  const [products, setProducts] = React.useState([]);


  React.useEffect(() => {
    fetch("https://mern-build-backend-2.onrender.com/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [products])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    localStorage.clear()
  }

  const handleAddNewProduct = () => {
    setForm("AddProduct");
    handleOpen();
  }

  const handleDelete = (productId) => {
    localStorage.setItem("productId", `${productId}`)
    setForm("DeleteProduct");
    handleOpen();
  }

  const handleEdit = (product) => {

    localStorage.setItem("name", product.name);
    localStorage.setItem("price", product.price);
    localStorage.setItem("discount", product.discount);
    localStorage.setItem("sponsored", product.sponsored);
    localStorage.setItem("description", product.description);
    localStorage.setItem("rating", product.rating);
    localStorage.setItem("imageUrl", product.imageUrl);
    localStorage.setItem("productId", product._id);

    setForm("EditProduct");
    handleOpen();
  }


  const cards = products.map((productDetails) => {
    return (
      <ProductCard
        key={productDetails._id}
        productDetails={productDetails}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Grid >
        <Paper sx={{ mt: 8.5, p: 1.5 }}>

          <Box >
            <Button color="inherit" variant="outlined" endIcon={<ControlPointIcon />} onClick={handleAddNewProduct}> Add new product  </Button>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {cards}
          </Box>

        </Paper>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          {form === "AddProduct" ? <AddProductForm handleClose={handleClose} setProducts={setProducts} /> : form === "EditProduct" ? <EditProductForm handleClose={handleClose} setProducts={setProducts} /> : form === "DeleteProduct" ? <DeleteProductForm handleClose={handleClose} /> : null}
        </Box>
      </Modal>
    </>
  )
}

export default App;





