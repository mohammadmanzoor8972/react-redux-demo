import constants from "../constant";
import { initialState } from '../data/colors';


export const colors = (state = [], action) => {
    switch(action.type) {
        case constants.ADD_COLORS :
        return [
            ...state,
            action.payload
        ]
        case constants.RATE_COLOR :
        return state.colors.map(
            c=> c.id==action.id
        )
        case constants.REMOVE_COLOR :
        return state.filter(
            c=> c.id !== action.id
        )
        case constants.SORT_COLORS :
            return state.sort((x,y)=>x.title-y.title);
        case constants.RESET :
            return initialState.colors;
        default : 
        
        return state;
    }
}


export const sort = (state="SORTED_BY_DATE", action) =>{
    switch(action.type) {
        case constants.SORT_COLORS :
            return action.data.sort((x,y)=>y.title-x.title);;
        default :
        return state;
}
}

export const color = (state={}, action) =>{
    switch(action.type) {
        case constants.ADD_COLORS :
    var obj = {
        id:action.id,
        title:action.title,
        color:action.color,
        timestamp:action.timestamp,
        rating:0
    }
    return obj;
    default :
    return state;
    }
}

