import { combineReducers } from 'redux'
import appAuthReducer from './appAuthReducer'

const rootReducer = combineReducers({
    appAuthReducer: appAuthReducer
});

export default rootReducer;