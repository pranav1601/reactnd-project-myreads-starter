import React,{Component} from 'react';
import BookShelfList from './BookShelfList'

class BookShelf extends Component{
    render(){
        const {books,shelf,updateShelf}=this.props
        return(
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{shelf}</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            <BookShelfList books={books} shelf={shelf} updateShelf={updateShelf}/>
                        </ol>
                        </div>
                    </div>
                </div>
        )
    }
}

export default BookShelf