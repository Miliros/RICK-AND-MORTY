const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites]
      };
    case "DELETE_CHARACTER": {
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => {
          return char.id !== action.payload;
        }),
      };
    }
    case "FILTER": {
      return {
        ...state.allCharacters,
        myFavorites: state.allCharacters.filter((char) => {
          return char.payload === action.payload;
        }),
      };
    }
    case "ORDER": {
      return {
        ...state.allCharacters,
        myFavorites: () => {
          if (action.payload === "Ascendente") {
            return state.allCharacters.sort((a,b) => a-b);
          } else if (action.payload === "Descendente") {
            return state.allCharacters.sort((a,b) => a+b);
          }
        },
      };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
