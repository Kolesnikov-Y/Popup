import {combineReducers} from 'redux'; 
import imageReducer from './imageReducer'; 
import imagesReducer from './imagesReducer'; 
import loader from './loader'; 

const rootReducer = combineReducers({
    images: imagesReducer, 
    image: imageReducer, 
    loader: loader
})

export default rootReducer
