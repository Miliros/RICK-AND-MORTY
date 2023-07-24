import axios from "axios";

export const getAllChars = (page, gender) => {
  return async (dispatch) => {
    if (gender === undefined) {
      const response = await axios(`http://localhost:3000/all?page=${page}`);
      return dispatch({
        type: "GETALL_CHARS",
        payload: response.data,
      });
    } else {
      const response = await axios(
        `http://localhost:3000/all?page=${page}&gender=${gender}`
      );
      return dispatch({
        type: "GETALL_CHARS",
        payload: response.data,
      });
    }
  };
};
export const getAllEpisodes = (page) => {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3000/episodes?page=${page}`);
    return dispatch({
      type: "GETALL_EPISODES",
      payload: response.data,
    });
  };
};
export const getCharByName = (charName) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3000/charname${charName ? `?name=${charName}` : ""}`
      );
      return dispatch({
        type: "GET_CHAR_NAME",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR_CHARACTER",
        payload: error.response.data,
      });
    }
  };
};

export const AddFav = (props) => {
  return async (dispatch) => {
    const response = await axios.post(`http://localhost:3000/fav`, props);
    return dispatch({
      type: "ADD_FAV",
      payload: response.data,
    });
  };
};
export function getFav() {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3000/favs`);
      return dispatch({
        type: "GET_FAVS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteFav = (id) => {
  return async (dispacth) => {
    const response = await axios.delete(`http://localhost:3000/fav/${id}`);
    const data = response.data;
    return dispacth({
      type: "DELETE_FAV",
      payload: data,
    });
  };
};

export const filterCards = (status) => {
  // console.log(status);
  return {
    type: "FILTER",
    payload: status,
  };
};
export const orderCards = (payload) => {
  return {
    type: "ORDER",
    payload,
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
export function removeState() {
  return function (dispatch) {
    return dispatch({
      type: "REMOVE_STATE",
    });
  };
}
