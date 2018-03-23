export function apiFailure(type, error) {
  return {
    type: type + "_FAILURE",
    payload: error.message,
    error: true
  };
}

export default function(store) {
  return next => action => {
    if (!action.meta || action.meta.type !== "api") {
      return next(action);
    }

    action.payload
      .then(apiResponse => {
        const { meta, ...rest } = action;
        store.dispatch({
          ...rest,
          payload: apiResponse
        });
      })
      .catch(error => {
        const failureAction = apiFailure(action.type, error);
        store.dispatch(failureAction);
      });
  };
}
