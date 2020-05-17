import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import BookList from './BooksList';
import Search from './Search';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>(
      this.setState(()=>({
        books
      }))
    ))
  }

  updateShelf=(book,shelf)=>{
    BooksAPI.update(book, shelf).then(books => {
      console.log(books);
    });
    let found=0
    let updatedBooks = this.state.books.map(b => {
      if (b.id === book.id) {
        b.shelf = shelf;
        found=1
      }
      return b;
    });

    if(found===0){
      book.shelf=shelf
      updatedBooks=updatedBooks.concat(book);
    }

    this.setState({
      books: updatedBooks,
    });
  }

  render() {
    return (
      
      <div className="app">
        <Route path='/search' render ={({history})=>(
          <div className="search-books">
          <Search history={history} books={this.state.books} updateShelf={this.updateShelf}/>
        </div>
        )}/>
        <Route exact path='/' render={({history})=>(
        <div className="list-books">
          <BookList books={this.state.books} updateShelf={this.updateShelf}/>  
          <div className="open-search">
            <button onClick={() => history.push('/search')}>Add a book</button>
          </div>
        </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
