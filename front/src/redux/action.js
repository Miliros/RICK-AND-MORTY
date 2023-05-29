import axios from "axios";

export const addCharacter = (character) => {
  return async (dispacth) => {
    const response = await axios.post(
      "http://localhost:3001/favs/create",
      character
    );
    const data = response.data;
    return dispacth({
      type: "ADD_CHARACTER",
      payload: data,
    });
  };
};
export const deleteCharacter = (id) => {
  return async (dispacth) => {
    const response = await axios.delete(
      `http://localhost:3001/favs/delete${id}`
    );
    const data = response.data;
    return dispacth({
      type: "DELETE_CHARACTER",
      payload: data,
    });
  };
};
export const getFavorite = () => {
  return async function (dispacth) {
    const response = await axios("http://localhost:3001/favs");
    const data = response.data;
    return dispacth({
      type: "GET_FAVS",
      payload: data,
    });
  };
};

export const filterCards = (status) => {
  return {
    type: "FILTER",
    payload: status,
  };
};
export const orderCards = (id) => {
  return {
    type: "ORDER",
    payload: id,
  };
};
export function getDetail(id) {
  return async function (dispatch) {
    try {
      var response = await axios(`http://localhost:3000/detail/${id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
