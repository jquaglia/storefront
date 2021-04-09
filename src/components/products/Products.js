import React, { useEffect } from 'react';
import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton } from '@material-ui/core';
import CategoryViewer from '../categories/Categories.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // this ensures that we are connected to our redux store

// import directly from the store directory.
// import { inactive, active } from '../../store/categories.js';
import { getProducts } from '../../store/products.js'
import { addToCart } from '../../store/cart.js';
import { loadProducts } from '../../store/products.js';

const ProductViewer = props => {

  useEffect(() => {
    props.loadProducts();
  }, []);

  return (
    <>
      {/* add description and render conditionally. make utility component for IF? */}
      <CategoryViewer />
      <Grid container justify="center" spacing={5}>
        {/* {console.log(props)} */}
        {props.products.productList.map((product, i) => {
          if (product.category === props.activeCategory.toLowerCase()) {

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
                    <IconButton component={Link} to={`/products/${product._id}`}>
                      View details
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            )
          } else {
            return null;
          }
        })}
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewer);