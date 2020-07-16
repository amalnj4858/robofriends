import React from 'react'

class Errors extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isError : false
		}
	}

	ComponentDidCatch = ()=> {
		this.setState({isError:true});
	}

	render(){
		if(this.state.isError){
			return <h1> OOPS WE HAVE AN ERROR ! </h1>;
		}
		else
			return this.props.children;
	}
}

export default Errors