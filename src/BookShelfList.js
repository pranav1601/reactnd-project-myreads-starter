import React,{Component} from 'react';
import BookShelfChanger from './BookShelfChanger';

class BookShelfList extends Component{
    render(){
        const {books,updateShelf}=this.props
        return(
            <div>
            {(!!books)&&(books.map((book)=>{
                            const {imageLinks,authors,title,id}=book
                            return(
                            <li key={id}>
                            <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+imageLinks.smallThumbnail+'")' }}></div>
                            <BookShelfChanger book={book} shelf={(!!book.shelf)?book.shelf:'none'} updateShelf={updateShelf}/>
                            </div>
                            <div className="book-title">{title}</div>
                            <div className="book-authors">{(!!authors) && (authors.map((author)=>author+'\n'))}</div>
                            </div>
                            </li>
                        )}))}
        </div>
        )
        
    }
}

export default BookShelfList;