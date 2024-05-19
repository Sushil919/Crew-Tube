// someReducer.js

// Define initial state for the reducer
const initialState = {
    value: 0,
  };
  
  // Define action types
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';
  
  // Create the reducer function
  const someReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          value: state.value + 1,
        };
      case DECREMENT:
        return {
          ...state,
          value: state.value - 1,
        };
      default:
        return state;
    }
  };
  
  export default someReducer;
  
  // Action creators
  export const increment = () => ({
    type: INCREMENT,
  });
  
  export const decrement = () => ({
    type: DECREMENT,
  });
  