import { createStore, combineReducers, applyMiddleware } from 'redux';
import { colors, sort} from '../reducer/index';
import { initialState } from '../data/colors';



const store = createStore(
    combineReducers({
        colors, 
        sort
    }),
    initialState
);

export default store;