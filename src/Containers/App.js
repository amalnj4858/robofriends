import React from 'react'
import CardList from '../Components/CardList'
//import Info from './Info'
import Search from '../Components/Search'
import './App.css'
import Scroll from '../Components/Scroll'
import Errors from '../Components/ErrorBoundary' 

 class App extends React.Component{

constructor(props){
	super();
	this.state = {
		robots : [],
		searchField : '',
	}
}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users').then(values=> values.json()).then(users=> this.setState({robots:users}));
}
onSearchChange = (event)=>{
	this.setState({ searchField : event.target.value});
}



render(){
const filterInfo = this.state.robots.filter((robo)=>{
		return robo.name.toLowerCase().includes(this.state.searchField.toLowerCase());
	})
	if(filterInfo.length===0)
		return(
			<div className = 'tc'>
			<h1 className='f1'> ROBOFRIENDS </h1>
		    <Search SearchChange = {this.onSearchChange} />
		    <br/>
		    <br/>
			<center><h1> OOPS NONE... </h1></center>
			</div>
			
			);
	return(
		<div className = 'tc'>
		  <h1 className='f1'> ROBOFRIENDS </h1>
		  <Search SearchChange = {this.onSearchChange} />
		  <br/>
		  <br/>
		  <Scroll>
		  <Errors>
		  <CardList info ={filterInfo} />
		  </Errors>
		  </Scroll>
		</div>
		);
}
}

export default App