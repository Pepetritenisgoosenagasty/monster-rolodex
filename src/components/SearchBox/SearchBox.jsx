import React from 'react';

import './SearchBox.style.css';


const SearchBox = ({ placeholder, handleChange}) => {
    return (
         <div className="search-box">
             <input className="search" type="search"  
                placeholder={placeholder} 
                onChange={handleChange}/>
         </div>
    )
}

export default SearchBox;