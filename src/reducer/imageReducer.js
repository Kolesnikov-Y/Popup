import { CLOSE_MODAL, LARGE_IMAGE, OPEN_MODAL, ADD_COMMENT } from "../actions/types";

const initialState = {
    imageInfo: {}, 
    isOpen: false
}; 

export default function imageReducer(state = initialState, action) {
    switch(action.type){
        case LARGE_IMAGE: 
            return state = {...state, imageInfo: action.payload}; 
        case ADD_COMMENT: 
            return state ={...state, imageInfo: {...state.imageInfo, comments: state.imageInfo.comments.concat(action.payload)}}
        case OPEN_MODAL: 
            return state = {...state, isOpen: true}
        case CLOSE_MODAL: 
            return state = {...state, isOpen: false}
        default: 
            return state
    }
    
}