import { LOADER_ON, LOADER_OFF } from "../actions/types";

const initialState = {
    isLoading: false
}

export default function loader(state = initialState, action) {
    switch(action.type){
        case LOADER_ON: 
            return state = {isLoading: true}; 
        case LOADER_OFF: 
            return state = {isLoading: false}
        default : 
            return state
    }
}