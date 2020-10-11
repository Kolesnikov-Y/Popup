import {CLOSE_MODAL, GET_IMAGES, LARGE_IMAGE, LOADER_OFF, LOADER_ON, OPEN_MODAL, ADD_COMMENT} from './types'
import Axios from 'axios'

const API = 'https://boiling-refuge-66454.herokuapp.com/images'

export function getImages () {
    return async function(dispatch) {
        try{
            dispatch(loaderOn())
            const response = await Axios.get(API)
            dispatch({
                type: GET_IMAGES,
                payload: response.data
            }) 

            console.log("success", response.data);
            dispatch(loaderOff())
        }catch(error) {
            console.error(error);
        } 
    }
}

// ================== MODAL
export function closeModal() {
    return ({
        type: CLOSE_MODAL
    })
}

export function openModal() {
    return ({
        type: OPEN_MODAL
    })
}

export function largeImage(id) {
    return async dispatch => {
        try{
            dispatch(loaderOn())
            const response = await Axios.get(`${API}/${id}`);
                dispatch(loaderOff())
                dispatch({
                    type: LARGE_IMAGE, 
                    payload: response.data
                })
            dispatch(openModal()) 
           
        }catch(error){
            console.error("massage: " + error);

        } 
    }
}

export function addComment(payload, id) {
    return async dispatch => {
        try{
            const payloadJSON = JSON.stringify(payload)
            const response = await Axios.post(`${API}/${id}/comments`, payloadJSON)
            console.log(response)
           
        }catch(error){
            console.error(error);
        }  
        dispatch({
            type: ADD_COMMENT, 
            payload
        })          
    } 
}


//  ============ LOADER
export function loaderOn() {
    return {
        type: LOADER_ON
    }
}

export function loaderOff() {
    return {
        type: LOADER_OFF
    }
}
