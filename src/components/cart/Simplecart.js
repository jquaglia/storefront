import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';
import './simplecart.scss';

const SimpleCart = props => {
  if (props.cart.cart.length > 0) {
    return (
      <>
        <Card>
          <CardContent>
            {props.cart.cart.map((product, i) => {
              return (
                <Typography key={i} className='banana'>
                  ${product.price} : {product.name}
                </Typography>
              )
            })}
          </CardContent>
        </Card>
      </>
    );
  } else {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(SimpleCart);