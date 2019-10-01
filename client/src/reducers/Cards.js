import {
  CREATE_CARD,
  FETCH_CARDS,
  DELETE_CARD,
  EDIT_CARD
} from "configs/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case CREATE_CARD:
      return {
        ...state,
        cards: action.payload
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload)
      };
    case EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card.id === action.payload.id) {
            return {
              ...card,
              complete: !card.complete
            };
          } else {
            return card;
          }
        })
      };
    default:
      return state;
  }
}
