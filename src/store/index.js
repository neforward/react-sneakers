import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { sneakersReduce } from './reducers';

const rootReduce = combineReducers({
    sneakersReduce
});

export const store = createStore(rootReduce, applyMiddleware(thunk));
