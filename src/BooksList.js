import React,{Component} from 'react';
import BookShelf from './BookShelf';

class BooksList extends Component{
    render(){
        return(
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf/>
                </div>
            </div>
        )
    }
}

export default BooksList;