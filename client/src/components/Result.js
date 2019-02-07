import React from "react";

function Result (props) {
    
    return (
        <div className="content bg-light">
            <div className="card mb-2">
                <div className="card-body">
                <div className="row">
                <div className="col-md-10">
                <h4>{window.location.pathname === "/search" ?props.book.volumeInfo.title : props.book.title}</h4>
                <p>Written by {window.location.pathname === "/search" ? props.book.volumeInfo.authors : props.book.authors}</p>
                </div>
                <div className="col-md-2 text-right">
                <a className="btn btn-secondary mr-2" href={window.location.pathname === "/search" ? props.book.volumeInfo.canonicalVolumeLink : props.book.link}>View</a>
                <button className="btn btn-secondary" id={props.book._id} onClick={window.location.pathname === "/search" ? () => props.saveBook(props.book) : props.deleteBook}> {window.location.pathname === "/search" ? "Save" : "Delete"}</button>
                </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-1 pl-2">
                        <img src={window.location.pathname === "/search" ? props.book.volumeInfo.imageLinks.thumbnail : props.book.image} alt="pic" width="100" />
                    </div>
                    <div className="col-md-11">
                        {window.location.pathname === "/search" ? props.book.volumeInfo.description : props.book.description} 
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Result;