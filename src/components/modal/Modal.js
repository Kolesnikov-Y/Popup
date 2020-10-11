import React from 'react'; 
import Form from './Form';
import Image from './Image';
import Comment from './Comments';
import CloseModal from './CloseModal';


export default function Modal (props) {
    return (
        <div className="modal">
            <div className="modal-body">
                <div className="modal-container">
                    <div className="modal-content">
                        <Image/>
                        <Form/>
                    </div>
                        <Comment/>
                        <CloseModal/>
                </div>
            </div>
        </div>
    )
}