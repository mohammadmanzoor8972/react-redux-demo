import { createStore, combineReducers, applyMiddleware } from 'redux';
import { colors, sort} from '../reducer/index';
import { initialState } from '../../data/colors';
import { devToolsEnhancer } from 'redux-devtools-extension';



const store= createStore(
    combineReducers({
        colors, 
        sort
    }),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



export default store;