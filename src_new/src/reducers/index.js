import counterReducer from './counter';
import sessionReducer from './auth';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
              counter:counterReducer,
              sessions:sessionReducer
})

export default  allReducers;
