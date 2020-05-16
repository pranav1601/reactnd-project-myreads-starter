import React,{Component} from 'react';
import BookShelfChanger from './BookShelfChanger';

class BookShelf extends Component{
    render(){
        const {books,shelf}=this.props
        return(
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{shelf}</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                        {books.map(({imageLinks,authors,title,id})=>(
                            <li key={id}>
                            <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+imageLinks.smallThumbnail+'")' }}></div>
                            <BookShelfChanger/>
                            </div>
                            <div className="book-title">{title}</div>
                            <div className="book-authors">{authors.map((author)=>author+'\n')}</div>
                            </div>
                            </li>
                        ))}
                            
                        </ol>
                        </div>
                    </div>
                </div>
        )
    }
}

export default BookShelf