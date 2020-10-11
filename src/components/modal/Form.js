import React from 'react'; 
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addComment} from '../../actions/actions'

export default function Form () {
    const [state, setState] = useState({name: "", comment: ''}); 
    const dispatch = useDispatch(); 
    const idValue = useSelector(state => state.image.imageInfo.id); 

    function handleSubmit(event){
        event.preventDefault(); 
        if(!state.name || !state.comment) {
            return false
        }
        const newComment = {
            id: idValue, 
            date: Date.now(), 
            text: state.comment
        }; 

        console.log(newComment);
        dispatch(addComment(newComment, idValue))

    }

    function handleChange(event) {
        setState({...state, [event.target.name]: event.target.value})
    }

    return (
        <form className="modal-form"  onSubmit={handleSubmit}>
            <input className="modal-form_comment" 
                    type="text"
                    id="name"
                    name="name" 
                    placeholder="Ваше имя" 
                    onChange={handleChange}/>

            <input className="modal-form_comment" 
                    type="text"
                    id="comment"
                    name="comment" 
                    placeholder="Ваш отзыв" 
                    onChange={handleChange}/>

            <button className='comment-btn'>
                    оставить комментарий</button>
        </form>
    )
}