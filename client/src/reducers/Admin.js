import { SIGN_IN, SIGN_OUT } from "configs/types";

export default (state = { admin: false }, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, admin: true };
    case SIGN_OUT:
      return { ...state, admin: false };
    default:
      return state;
  }
};
