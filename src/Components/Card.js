import React from 'react'

const Card = ({id,name,email}) => {
	return(
		<div className = 'tc bg-light-green grow br3 pa3 dib ma2 shadow-5'>
		<img alt = 'photo' src = {`https://robohash.org/${id}?200*200`} />
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
		);
}

export default Card;