import {
  LOAD_PAYMENT,
  LOAD_PAYMENT_ERROR,
  LOAD_PAYMENT_SUCCESS
} from "./actions";

const initState = {
  isLoaded: false,
  paymentlist: null,
  error: null
};
export default function(state = initState, action) {
  switch (action.type) {
    case LOAD_PAYMENT:
      return {
        ...state,
        isLoaded: false,
        payment: null,
        error: null
      };
    case LOAD_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        paymentlist: action.payment,
        error: null
      };
    case LOAD_PAYMENT_ERROR:
      return {
        ...state,
        isLoaded: true,
        paymentlist: null,
        error: action.error
      };

    default:
      return state;
  }
}
