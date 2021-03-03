const initialState = {
  items: [
    {
      productId: 11,
      quantity: 3,
    },
    {
      productId: 14,
      quantity: 2,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
