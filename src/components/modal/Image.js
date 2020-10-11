import React from 'react';
import { useSelector } from 'react-redux';

export default function Image () {

    
    const url = useSelector (state => state.image.imageInfo.url)

    return (
        <div className="modal-img">
            <img src={url} alt="someImage"/>
      </div>  
    )
}