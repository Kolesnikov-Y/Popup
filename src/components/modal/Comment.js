import React from 'react'

export default function Comment (props) {
    let date = new Date(props.date)

    function formatDate(date) {
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
      
        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
      
        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;
      
        return dd + '.' + mm + '.' + yy;
    }

    const dateNew = formatDate(date); 

    return (
    <div className="comment">
        <div className="comment-date">{dateNew}</div>
        <div className="comment-text">{props.text}</div>
    </div>
    )
}