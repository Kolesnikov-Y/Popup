import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

 function Comments(props) {
    let commentArr = props.comments.comments

    console.log(props.comments);
    if(!commentArr.length){
        return (
            <div className="comments">
                <h4> Комментариев нет !</h4>
            </div>
        )
    }

    return (
        <div className="comments">
            {commentArr.map(c =>  <Comment key={c.id + c.date} text={c.text} date={c.date}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        comments: state.image.imageInfo, 
        loader: state.loader.isLoading
    })
}

export default connect(mapStateToProps)(Comments)
