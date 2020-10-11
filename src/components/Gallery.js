import React from 'react'
import { connect } from 'react-redux'
import GalleryItem from './GalleryItem'

function Gallery(props) {

   return(
       <div className="gallery">
           {props.images.map(i =>  <GalleryItem key={i.id} url={i.url} id={i.id}/>)}
       </div>
   )
}

const mapStateToProps = state => {
  return ({
    images: state.images.images
  })
}

export default connect(mapStateToProps)(Gallery); 