import { axios, history } from "helpers";
import {
  CREATE_CARD,
  FETCH_CARDS,
  DELETE_CARD,
  EDIT_CARD
} from "configs/types";

// Fetch Cards
export const fetchCards = () => async dispatch => {
  const response = await axios.get("/api/cards");
  dispatch({ type: FETCH_CARDS, payload: response.data });
};

// Post Card
export const createCard = formValues => async dispatch => {
  const response = await axios.post("/cards", { ...formValues });
  dispatch({ type: CREATE_CARD, payload: response.data });
  history.push("/");
};

// Delete Todo
export const deleteCard = id => async dispatch => {
  await axios.delete(`/cards/${id}`);
  dispatch({ type: DELETE_CARD, payload: id });
};

// Edit card
export const editCard = (id, formValues) => async dispatch => {
  const response = await axios.put(`/cards/${id}`, formValues);
  dispatch({ type: EDIT_CARD, payload: response.data });
  history.push("/");
};
