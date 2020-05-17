import React from 'react';

const BookShelfChanger=(props)=>{
    const handleUpdate=(e)=>{
        props.updateShelf(props.book,e.target.value)
    }
    return(
        <div className="book-shelf-changer">
                <select value={props.shelf} onChange={handleUpdate}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
        </div>
    )
}

export default BookShelfChanger;