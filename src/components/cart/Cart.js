import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart.js';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector } from 'react-redux';



const Cart = props => {
const cart = useSelector(state => state.cart.cart);
console.log(cart);



  return (
    <>
    <Card>
      <CardContent>
        {props.cart.cart.map((product, i) => {
          return (
            <>
              <Card>
                <Typography key={i} className='banana'>
                  ${product.price} : {product.name}
                </Typography>
                <IconButton onClick={() => props.removeFromCart(product)}>
                  <DeleteIcon />
                </IconButton>
              </Card>
            </>
          );
        })}
      </CardContent>
    </Card>
  </>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = {
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)