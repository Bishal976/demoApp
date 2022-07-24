import { combineReducers } from 'redux';
import { AddReducer } from './reducer';
import {ShowUser} from './reducer';

const rootReducer=combineReducers({
    AddReducer, ShowUser
});
export default rootReducer;