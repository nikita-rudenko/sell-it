export const logger = store => next => action => {
  if (action.meta && action.meta.printLog) {
    console.log('dispatching', action);
    console.log('next action', store.getState());
  }

  let result = next(action);
  return result;
};
