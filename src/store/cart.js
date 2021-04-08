
const initialState = {
  cart: [],
  visible: false
}

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, payload] };
    case 'REMOVE_FROM_CART':
      const cart = [...state.cart];
      let deleteOne = true;
      const newCart = cart.filter((item) => {
        if (item === payload && deleteOne) {
          deleteOne = false;
          return false;
        } else { return true; }
      })
      return { ...state, cart: [...newCart] };
    default:
      return state;
  }
}

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}

export function removeFromCart(product) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  }
}