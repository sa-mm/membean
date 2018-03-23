import apiMiddleware from "../store/apiMiddleware";
import mockFetch from "../api/mockFetch";
import { apiFailure } from "../store/apiMiddleware";

describe("apiMiddleware action creator tests", () => {
  it("should create a failure action", () => {
    const msg = "This is a test";
    const expectedAction = {
      type: "TEST_API_FAILURE",
      payload: msg,
      error: true
    };
    const type = "TEST_API";
    const error = new Error(msg);
    expect(apiFailure(type, error)).toEqual(expectedAction);
  });
});

describe("apiMiddleware tests", () => {
  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    };
    const next = jest.fn();
    const invoke = action => apiMiddleware(store)(next)(action);
    return { store, next, invoke };
  };

  it("passes through action if no meta api key present", () => {
    const { next, invoke } = create();
    const action = { type: "TEST" };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it("intercepts CALL_API action and dispatches another action if meta api present", () => {
    const { next, store, invoke } = create();
    const action = {
      type: "CALL_API",
      payload: mockFetch(),
      meta: { type: "api" }
    };
    invoke(action);

    setTimeout(() => {
      expect(store.dispatch).toHaveBeenCalled();
    });
  });

  it("intercepts CALL_API action and dispatches another CALL_API action if response is successful", () => {
    const { store, invoke } = create();
    const action = {
      type: "CALL_API",
      payload: mockFetch(),
      meta: { type: "api" }
    };
    invoke(action);

    setTimeout(async () => {
      const newAction = {
        type: "CALL_API",
        payload: await mockFetch()
      };

      expect(store.dispatch).toHaveBeenCalledWith(newAction);
    });
  });

  it("dispatches a failure action if promise is rejected", () => {
    const message = "Rejected promise from fetch…";
    const rejectedMockFetch = () => Promise.reject(new Error(message));
    const { store, invoke } = create();
    const action = {
      type: "CALL_API",
      payload: rejectedMockFetch(),
      meta: { type: "api" }
    };
    invoke(action);

    setTimeout(() => {
      const newAction = {
        type: "CALL_API_FAILURE",
        payload: message,
        error: true
      };
      expect(store.dispatch).toBeCalledWith(newAction);
    });
  });
});
