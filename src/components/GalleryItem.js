import React from 'react'
import { connect } from 'react-redux'
import {largeImage} from '../actions/actions'

function GalleryItem(props) {

    const getLargeImage = () => {
        props.largeImage(props.id)
    }

   return(
        <div className="gallery-item"
             onClick={getLargeImage}>
            <img src={props.url} alt="some img"/>
        </div>
   )
}
export default connect(null, {largeImage})(GalleryItem) 