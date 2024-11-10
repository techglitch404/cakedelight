import {
  ADD_CAKES,
  FETCH_CAKES,
  FETCH_CAKES_ERROR,
  FETCH_CAKES_PENDING,
  GET_CAKES_FROM_LOCALSTORAGE,
  SELECTED_CAKES,
  SET_CAKES,
  INCREASE,
  DECREASE,
  REMOVE_CAKES,
} from "./constant";

const initialState = {
  [FETCH_CAKES]: [],
  [FETCH_CAKES_PENDING]: false,
  [FETCH_CAKES_ERROR]: null,
  [SELECTED_CAKES]: [],
};

const cakeReducer = (state = initialState, action) => {
  switch (action?.type) {
    case SET_CAKES:
      return { ...state, [FETCH_CAKES]: action?.payload };
    case FETCH_CAKES_PENDING:
      return { ...state, [FETCH_CAKES_PENDING]: action?.payload };
    case FETCH_CAKES_ERROR:
      return { ...state, [FETCH_CAKES_ERROR]: action?.payload };
    case ADD_CAKES: {
      const prevSelectedItems = state[SELECTED_CAKES];
      const newCakes = action?.payload;
      const selectedItemIndex = prevSelectedItems.find(
        (item) => item.id === newCakes.id
      );
      let updatedCakesList = [];
      if (!selectedItemIndex) {
        updatedCakesList = [...prevSelectedItems, { ...newCakes, quantity: 1 }];
      } else {
        updatedCakesList = prevSelectedItems.map((item) => {
          if (item?.id === newCakes?.id) {
            return { ...item, quantity: item?.quantity + 1 };
          }
          return item;
        });
      }
      localStorage.setItem(SELECTED_CAKES, JSON.stringify(updatedCakesList));
      return { ...state, [SELECTED_CAKES]: updatedCakesList };
    }
    case INCREASE: {
      const updatedCakesList = state[SELECTED_CAKES].map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem(SELECTED_CAKES, JSON.stringify(updatedCakesList));
      return { ...state, [SELECTED_CAKES]: updatedCakesList };
    }
    case DECREASE: {
      const updatedCakesList = state[SELECTED_CAKES].map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      localStorage.setItem(SELECTED_CAKES, JSON.stringify(updatedCakesList));
      return { ...state, [SELECTED_CAKES]: updatedCakesList };
    }
    case REMOVE_CAKES: {
      const updatedCakesList = state[SELECTED_CAKES].filter(
        (item) => item.id !== action.payload // Filter out the item with the matching ID
      );
      localStorage.setItem(SELECTED_CAKES, JSON.stringify(updatedCakesList));
      return { ...state, [SELECTED_CAKES]: updatedCakesList };
    }
    case GET_CAKES_FROM_LOCALSTORAGE: {
      const cakesFromLocalStorage = localStorage.getItem(SELECTED_CAKES);
      return {
        ...state,
        [SELECTED_CAKES]: cakesFromLocalStorage
          ? JSON.parse(cakesFromLocalStorage)
          : [],
      };
    }
    default:
      return state;
  }
};

export default cakeReducer;
