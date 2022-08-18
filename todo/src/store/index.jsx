import { createStore, combineReducers } from 'redux';
import { todoReducer } from './reducer';

const rootReducer = combineReducers({ toDo: todoReducer });

export const store = createStore(rootReducer);
