import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import './header.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';


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
          <NavLink activeClassName="selected" to="/" className='guacamole'>
            <Typography variant="h2" component="h1" edge='start' className={`${classes.name} guacamole`}>
              OUR STORE
            </Typography>
          </NavLink>
          <div className={classes.title}></div>
          <NavLink activeClassName="selected" to="/cart" className='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit'>
            <ShoppingCartIcon />({props.cart.cart.length})
          </NavLink>
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