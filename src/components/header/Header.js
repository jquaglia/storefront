import React from 'react';
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import './header.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  name: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h2" component="h1" edge='start' className={classes.name}>
            OUR STORE
          </Typography>
          <div className={classes.title}></div>
          <Button color='inherit'><ShoppingCartIcon/>({props.cart.cart.length})</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Header);