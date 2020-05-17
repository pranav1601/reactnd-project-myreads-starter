import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelfList from './BookShelfList';

class Search extends Component{
    state={
        searchBook:[],
        query:''
    }
    componentDidMount(){
        this.setState(()=>({
            query:''
        }))
    }

    updateQuery=(query)=>{
        this.setState(()=>({
            query
        }))
        if(query.length>0){
            BooksAPI.search(query).then((Books)=>{
                if(Books.error){
                    this.setState(()=>({
                        searchBook:[]
                    }))
                }else{
                // console.log(Books)
                Books.forEach(element => {
                    let bookid=element.id
                    console.log(element)
                    console.log(bookid)
                    this.props.books.forEach(value=>{
                        // console.log(value)
                        if(bookid===value.id){
                            console.log(value)
                            element.shelf=value.shelf
                        }
                    })
                });
                this.setState(()=>({
                    searchBook:Books
                }))}
            })
        }else{
            this.setState(()=>({
                searchBook:[]
        }))
        }
        
    }

    render(){
        const {history,updateShelf}=this.props
        const query=this.state.query
        const Books=this.state.searchBook
        return(
            <div>
                <div className="search-books-bar">
            <button className="close-search" onClick={() => history.push('/')}>Close</button>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"
                value={query}
                onChange={(event)=>{this.updateQuery(event.target.value)}}/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                <BookShelfList books={Books} shelf='' updateShelf={updateShelf}/>
            </ol>
          </div>
            </div>
            
        )
    }
        
}

export default Search;