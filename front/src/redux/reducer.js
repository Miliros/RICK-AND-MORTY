const initialState = {
  myFavorites: [],
  allMyFavorites: [],
  detail: [],
  characters: [],
  allCharacters: [],
  checkPagination: false,
  filterCharacters: [],
  episodes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETALL_CHARS":
      return {
        ...state,
        characters: action.payload,
        allCharacters: action.payload,
        checkPagination: true,
      };
    case "GETALL_EPISODES":
      return {
        ...state,
        episodes: action.payload,
      };
    case "GET_CHAR_NAME":
      return {
        ...state,
        characters: action.payload,
        allCharacters: action.payload,
        checkPagination: false,
      };
    case "ADD_FAV":
      const addFavorites = [...state.allMyFavorites, action.payload];
      return {
        ...state,
        allMyFavorites: [...addFavorites],
        myFavorites: [...addFavorites],
      };
    case "GET_FAVS": {
      return {
        ...state,
        allMyFavorites: [...action.payload],
        myFavorites: [...action.payload],
      };
    }
    case "DELETE_FAV": {
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => {
          return char.id !== action.payload;
        }),
      };
    }
    case "FILTER": {
      return {
        ...state,
        allCharacters:
          action.payload === "all"
            ? state.allCharacters
            : state.allCharacters.filter((char) => {
                return char.gender === action.payload;
              }),
      };
    }
    case "ORDER": {
      let orderAlpha =
        action.payload === "a-z" && state.characters
          ? state.characters.results.sort(function (a, b) {
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();
              if (nameA > nameB) {
                return 1;
              }
              if (nameB > nameA) {
                return -1;
              }
              return 0;
            })
          : state.characters.results.sort(function (a, b) {
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();
              if (nameA > nameB) {
                return -1;
              }
              if (nameB > nameA) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filterCharacters: orderAlpha,
      };
    }
    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };
    case "ERROR_CHARACTERS":
      return {
        ...state,
        error: action.payload,
      };
    case "REMOVE_STATE":
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
