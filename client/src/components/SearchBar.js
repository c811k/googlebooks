import React from "react";

function SearchBar(props) {
    return (
        <div className="card-body bg-light mb-4">
            <h2 className="mb-4">Book Search</h2>
            <div className="input-group mb-3">
                <input 
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text" 
                    className="form-control" placeholder="Search by Title"
                    id="search"
                />
                <div className="input-group-append">
                    <button
                        onClick={props.handleFormSubmit}
                        className="btn btn-secondary">
                        Search
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default SearchBar;