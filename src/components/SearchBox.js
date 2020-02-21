import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
        <input 
        className = 'pa3 ba b--grey bg-lightest-blue'
        type='search' placeholder='Search' onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;