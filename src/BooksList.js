import React,{Component} from 'react';
import BookShelf from './BookShelf';



class BooksList extends Component{
    shelfBooks=(books,shelf)=>(books.filter((book)=>book.shelf===shelf))
    render(){
        const {books,updateShelf}=this.props
        return(
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {/* {console.log(this.shelfBooks(books,"currentlyReading"))} */}
                <div className="list-books-content">
                    <BookShelf books={this.shelfBooks(books,'currentlyReading') } shelf='currentlyReading' updateShelf={updateShelf}/>
                    <BookShelf books={this.shelfBooks(books,'wantToRead')} shelf='wantToRead' updateShelf={updateShelf}/>
                    <BookShelf books={this.shelfBooks(books,'read')} shelf='read' updateShelf={updateShelf}/>
                </div>
            </div>
        )
    }
}

export default BooksList;