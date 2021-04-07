import React from 'react';
import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton } from '@material-ui/core';
import CategoryViewer from '../categories/Categories.js';

import { connect } from 'react-redux'; // this ensures that we are connected to our redux store

// import directly from the store directory.
// import { inactive, active } from '../../store/categories.js';
import { getProducts } from '../../store/products.js'
import { addToCart } from '../../store/cart.js';

const productViewer = props => {
  return (
    <>
      {/* add description and render conditionally. make utility component for IF? */}
      <CategoryViewer />
      <Grid container justify="center" spacing={5}>
        {/* {console.log(props)} */}
        {props.products.productList.map((product, i) => {
          if (product.category === props.activeCategory) {

            return (
              <Grid item key={i}>
                <Card>
                  <CardHeader title={product.name} />
                  <CardContent>
                    <Typography component="p">$ {product.price}</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton onClick={() => props.addToCart(product)}>
                      Add to cart
                    </IconButton>
                    <IconButton>View details</IconButton>
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
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(productViewer);