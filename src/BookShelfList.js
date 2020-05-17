import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const BookShelfList=(props)=>{
    const {books,updateShelf}=props
    return(
        <div className="books-grid">
            {(books.length===0)?(<div></div>):(books.map((book)=>{
                            const {imageLinks,authors,title,id}=book
                            let thumbnail=(!!imageLinks)?''+imageLinks.smallThumbnail+'':''
                            return(
                            <li key={id}>
                            <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+thumbnail+'")' }}></div>
                            <BookShelfChanger book={book} shelf={(!!book.shelf)?book.shelf:'none'} updateShelf={updateShelf}/>
                            </div>
                            <div className="book-title">{title}</div>
                            <div className="book-authors">{(!!authors) && (authors.map((author)=><p key={author}>{author}</p>))}</div>
                            </div>
                            </li>
                        )}))}
        </div>
    )
}

export default BookShelfList;