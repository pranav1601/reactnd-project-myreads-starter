import React from 'react';
import BookShelf from './BookShelf';

const shelfBooks=(books,shelf)=>(books.filter((book)=>book.shelf===shelf))

const BooksList=(props)=>{
    const {books,updateShelf}=props
    return(
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    <BookShelf books={shelfBooks(books,'currentlyReading') } shelf='Currently Reading' updateShelf={updateShelf}/>
                    <BookShelf books={shelfBooks(books,'wantToRead')} shelf='Want To Read' updateShelf={updateShelf}/>
                    <BookShelf books={shelfBooks(books,'read')} shelf='Read' updateShelf={updateShelf}/>
                    </div>
                    
                </div>
            </div>
    )
}

export default BooksList;