const initialState = {
  cart: [],
  user: null,
};

const getCartTotal = (cart) => cart?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  if (action.type === "Add_To_Cart") {
    return {
      ...state,
      cart: [...state.cart, action.item],
    };
  }
  // if (action.type === "REMOVE_ITEMS") {
  //   return {
  //     ...state,
  //     cart: state.cart.filter((xItems) => xItems.id !== action.payload),
  //   };
  // }
  if (action.type === "REMOVES_ITEMS") {
    const index = state.cart.findIndex((cartItem) => cartItem.id === action.payload);

    let newCart = [...state.cart];

    if (index >= 0) {
      newCart.splice(index, 1);
    } else {
      console.warn("Cant remove, as cart is Empty");
    }
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === "REMOVE_ALL") {
    return { ...state, cart: [] };
  }
  if (action.type === "SET_USER") {
    return { ...state, user: action.user };
  }
  if(action.type === "EMPTY_CART"){
    return {...state, cart:[]}
  }
  return state;
};

export { initialState, reducer, getCartTotal };
