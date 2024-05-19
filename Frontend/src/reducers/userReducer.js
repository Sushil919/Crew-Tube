// userReducer.js

const initialState = {
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  
  // Action creators
  export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
  });
  
  export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });
  