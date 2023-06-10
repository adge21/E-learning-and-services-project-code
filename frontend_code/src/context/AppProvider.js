import { act } from "react-dom/test-utils";

const AppReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
          return {
            ...state,
            loggedin: action.payload,
          }
        case "NAME_FOUND":
          return {
            ...state,
            firstname: action.payload,
          }
          default:
            return state;
        }
      };
    export default AppReducer;
      