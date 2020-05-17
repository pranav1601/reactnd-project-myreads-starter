import React from 'react';
import BookShelfList from './BookShelfList'

const BookShelf=(props)=>{
    const {books,shelf,updateShelf}=props
    return(
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{shelf}</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            <BookShelfList books={books} updateShelf={updateShelf}/>
                        </ol>
                        </div>
                    </div>
                </div>
    )
}


export default BookShelf