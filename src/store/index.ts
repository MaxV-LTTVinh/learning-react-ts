import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { acountReducer } from "./account/reducers";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  account: acountReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  return createStore(rootReducer, composeEnhancers(middlewareEnhancer));
}
