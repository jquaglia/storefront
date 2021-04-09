import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { removeFromCart } from '../../store/cart.js';
import DeleteIcon from '@material-ui/icons/Delete';
import { If } from '../if/If.js';
import './simplecart.scss';

const SimpleCart = props => {
  return (
    <If condition={props.cart.cart.length > 0}>
      <div id='chimp'>
        <Card id='monkey'>
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
      </div>
    </If>
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

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);