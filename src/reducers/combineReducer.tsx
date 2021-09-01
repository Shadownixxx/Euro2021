import { combineReducers } from 'redux';
import { appReducer } from './reducer';
import { matchesReducer } from './reducer';

export const rootReducer = combineReducers({
    countries: appReducer,
    matches: matchesReducer
});

