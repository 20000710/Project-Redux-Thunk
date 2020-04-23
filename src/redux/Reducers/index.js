import { combineReducers } from 'redux';
import reducer from '../Reducers/ReducerGetData';
import counter from '../Reducers/ReducerCounter';

const rootReducers = combineReducers({ reducer, counter })

export default rootReducers;