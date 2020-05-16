import React,{Component} from 'react';
import BookShelf from './BookShelf';



class BooksList extends Component{
    shelfBooks=(books,shelf)=>(books.filter((book)=>book.shelf===shelf))
    render(){
        const books=this.props.books
        return(
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {/* {console.log(this.shelfBooks(books,"currentlyReading"))} */}
                <div className="list-books-content">
                    <BookShelf books={this.shelfBooks(books,'currentlyReading')} shelf='currentlyReading'/>
                    <BookShelf books={this.shelfBooks(books,'wantToRead')} shelf='wantToRead'/>
                    <BookShelf books={this.shelfBooks(books,'read')} shelf='read'/>
                </div>
            </div>
        )
    }
}

export default BooksList;