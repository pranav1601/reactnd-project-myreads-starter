import React,{Component} from 'react';

class BookShelfChanger extends Component{
    handleUpdate=(e)=>{
        this.props.updateShelf(this.props.book,e.target.value)
    }

    render(){
        const shelf=this.props.shelf
        return(
            <div className="book-shelf-changer">
                {console.log(shelf)}
                <select value={shelf} onChange={this.handleUpdate}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
        )
    }
}

export default BookShelfChanger;