import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton } from '@material-ui/core';
import { getProducts } from '../../store/products.js'
import { addToCart } from '../../store/cart.js';
import { loadProducts } from '../../store/products.js';
import { connect } from 'react-redux';

const Details = props => {
  let products = useSelector(state => state.products);
  console.log(products)
  const { id } = useParams();
  console.log(id);

  let filtered = products.productList.filter((item) => item._id === id);
  console.log(filtered);


  return (
    <>
      {filtered.map((product, i) => {
        return (
          <Grid item key={i}>
            <Card>
              <CardHeader title={product.name} />
              <CardContent>
                <Typography component="p">$ {product.price}</Typography>
              </CardContent>
              <CardContent>
                <Typography component="p">In Stock: {product.inStock}</Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => props.addToCart(product)}>
                  Add to cart
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
      <h1>Hello</h1>
    </>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
    activeCategory: state.categories.activeCategory,
    activeDescription: state.categories.activeDescription
  }
}

const mapDispatchToProps = {
  getProducts,
  addToCart,
  loadProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);