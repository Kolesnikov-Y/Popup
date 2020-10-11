import React from 'react'
import { useDispatch } from 'react-redux'; 
import {closeModal} from '../../actions/actions'

export default function CloseModal() {
    const dispatch = useDispatch(); 


    return (
    <div className="close-btn" onClick={() => dispatch(closeModal()) }>
        <div className="close-1"></div>
        <div className="close-2"></div>
    </div>
    )
}