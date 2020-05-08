import React, {Component} from 'react';

import Search from "./components/search";
import Images from "./components/images";


class App extends Component
{    
	constructor(props)
	{
		super(props);
		this.state = 
		{
			tags: ""
		}
	}
	
	handleData = (value) =>
	{
		this.setState({tags: value});
		// console.log('tags : ' + this.state.tags); 		
	}

	render()
	{    
		return (
			<div className="App">
				<h1>Search for something in cars</h1>
				<Search onSubmit={this.handleData} />
				<Images tags={this.state.tags} />
			</div>
		);
	}
}

export default App;
