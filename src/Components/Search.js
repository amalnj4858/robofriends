import React from 'react'

const Search = ({SearchChange}) => {
	return <input type = 'search' placeholder ='Search Robot' onChange = {SearchChange} />;
}

export default Search