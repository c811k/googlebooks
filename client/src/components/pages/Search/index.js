import React, { Component} from "react";
import Header from "../Home";
import SearchBar from "../../SearchBar";
import Result from "../../Result";
import API from "../../../utils/API";
import axios from "axios";

class Search extends Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.searchBooks("Old Men and the Sea");
    };

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data.items }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]:value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
        console.log(this.state.result);
        
    };

    saveBook = (book) => {
        console.log(book);
        axios.post("/api/books", {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.canonicalVolumeLink
        });
    }

    render() {
        return (
            <div className="content">
                <Header />
                <SearchBar 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <h2 className="mb-4">Results</h2>

                {this.state.result.map((item) => {
                    return (
                        <Result
                        key={item.id}
                        book={item}                         
                        saveBook={this.saveBook}
                        deleteBook={this.deleteBook}
                    />
                    );
                })}
               
            </div>
            
        );
    }
}

export default Search;