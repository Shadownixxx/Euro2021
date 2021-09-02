import { combineReducers } from 'redux';
import { appReducer } from './reducer';
import { matchesReducer } from './reducer';
import { matchesReducer2 } from './reducer';

export const rootReducer = combineReducers({
    countries: appReducer,
    matches: matchesReducer,
    matches2: matchesReducer2
});

