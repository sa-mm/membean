import { callApi } from "../store/rootReducer";
import reducer from "../store/rootReducer";
import mockFetch from "../api/mockFetch";

describe("rootReducer action creator tests", () => {
  it("should create an action to add a todo", () => {
    const expectedAction = {
      type: "CALL_API",
      payload: mockFetch(),
      meta: {
        type: "api"
      }
    };
    expect(callApi()).toEqual(expectedAction);
  });
});

describe("rootReducer tests", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      apiResponse: null,
      errorMessage: null
    });
  });

  it("should handle CALL_API", () => {
    const action = {
      type: "CALL_API",
      payload: { images: [1, 2, 3] }
    };
    expect(reducer(undefined, action)).toEqual({
      apiResponse: { images: [1, 2, 3] },
      errorMessage: null
    });
  });

  it("should handle CALL_API_FAILURE", () => {
    const msg = "Test error message.";
    const action = {
      type: "CALL_API_FAILURE",
      payload: msg
    };
    expect(reducer(undefined, action)).toEqual({
      apiResponse: null,
      errorMessage: msg
    });
  });

  it("should handle a previous error state", () => {
    const apiResponse = { images: [1, 2, 3] };
    const action = {
      type: "CALL_API",
      payload: apiResponse
    };

    const prevState = {
      apiResponse: null,
      errorMessage: "There was an error."
    };
    expect(reducer(prevState, action)).toEqual({
      apiResponse,
      errorMessage: null
    });
  });

  it("should retain the previous api response when reporting an api error", () => {
    const prevState = {
      apiResponse: { images: [1, 2, 3] },
      errorMessage: null
    };

    const action = {
      type: "CALL_API_FAILURE",
      payload: "This is a test error message."
    };

    expect(reducer(prevState, action)).toEqual({
      errorMessage: "This is a test error message.",
      apiResponse: { images: [1, 2, 3] }
    });
  });
});
