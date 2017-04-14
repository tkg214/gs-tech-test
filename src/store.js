import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger as logger } from 'redux-logger';
import reducer from './reducers';

const middleware = applyMiddleware(thunk, logger());

export default createStore(reducer, middleware);
