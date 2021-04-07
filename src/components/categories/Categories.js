import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { active, inactive } from '../../store/categories.js';
import { connect } from 'react-redux';

const CategoryViewer = (props) => {
  return (
    <>
      <Typography variant="h5" component="h2">
        Browse our Categories
      </Typography>
      {console.log(props)}
      <Button onClick={() => props.active('Electronics', 'Making your life easier, one volt at a time')}>
        Electronics
      </Button>
      <Button onClick={() => props.active('Food', 'Stuff for you to eat')}>
        Food
      </Button>
      <Typography variant="h3" component="h3">
        {props.activeCategory}
      </Typography>
      <Typography>{props.activeDescription}</Typography>
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
  inactive,
  active
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryViewer);
