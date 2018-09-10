import { createStore, compose, applyMiddleware } from 'redux';
// import { default as reduxThunk } from 'redux-thunk';
import { middleware as reduxPack } from 'redux-pack';
import rootReducer from './rootReducer';

const makeCreateStore = ({
  history,
}) => {
  const middlewares = [
    reduxPack,
  ].filter(Boolean);

  const storeEnhancers = [
    applyMiddleware(...middlewares),
    __BROWSER__ && window.devToolsExtension && window.devToolsExtension(),
  ].filter(Boolean);

  return (initialState) => createStore(
    rootReducer,
    initialState,
    compose(...storeEnhancers),
  );
};

export default makeCreateStore;
