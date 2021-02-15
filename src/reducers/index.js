import { combineReducers } from 'redux'
import reducer from './reducer'
import cartReducer from './cartReducer';

export default combineReducers({
    reducer,
    cartReducer
})