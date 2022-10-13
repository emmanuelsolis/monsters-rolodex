import './search-box.styles.css'

import React from 'react'

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
       <input
          className='search'
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
    </div>
  )
}

export default SearchBox
