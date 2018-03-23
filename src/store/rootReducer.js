import mockFetch from "../api/mockFetch";

//Constant
const CALL_API = "CALL_API";
const CALL_API_FAILURE = "CALL_API_FAILURE";

//Action creator
export function callApi() {
  return {
    type: CALL_API,
    payload: mockFetch(),
    meta: {
      type: "api"
    }
  };
}

//Reducer
const defaultState = {
  apiResponse: null,
  errorMessage: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case CALL_API:
      return {
        ...state,
        apiResponse: action.payload,
        errorMessage: null
      };
    case CALL_API_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
