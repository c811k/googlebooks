import React from "react";
import Header from "../Home";
import Result from "../../Result";
import axios from "axios";

class Saved extends React.Component {
    state = {
        result: []
    }
    componentDidMount() {
        this.getBook();
    };
    
    getBook = () => {
        axios.get("/api/books/").then((response) => {
            this.setState({
                result: response.data
            });
        });
    };

    deleteBook = event => {
        event.preventDefault();
        axios.delete(`/api/books/${event.target.id}`).then(() => {
            this.getBook();
        });
    };
      
    render() {
        return (
            <div className="content">
                <Header />
                {this.state.result.map((item) => {
                    return (
                        <Result
                        key={item._id}
                        book={item}
                        saveBook={this.saveBook}
                        deleteBook={this.deleteBook} 
                    />
                    );
                })}
            </div>
            
        );
    };
}


export default Saved;