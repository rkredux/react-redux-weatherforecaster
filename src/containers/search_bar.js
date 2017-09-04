import React, { Component } from "react"; 
import { connect } from "react-redux"; 
import { bindActionCreators } from "redux"; 
import { fetchWeather } from "../actions/index"; 



class SearchBar extends Component{

	constructor(props){
		super(props); 
		this.state = {
			city: ""
		}; 
		this.onInputChange = this.onInputChange.bind(this); 
		this.onFormSubmit = this.onFormSubmit.bind(this); 
	}

	onInputChange(event){
		console.log(event.target.value); 
		this.setState({city: event.target.value})
	}

	onFormSubmit(event){
		event.preventDefault(); //prevents it from 
		//connecting to the server
		this.props.fetchWeather(this.state.city); 
		this.setState({city: ""})
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
				   value={this.state.city}
				   placeholder= "Get a five-day forecast in your city"  
				   className="form-control"
				   type="text"
				   onChange={this.onInputChange}/>
				<span className="input-group-btn">
					<button 
					    type="submit" 
					    className="btn btn-secondary">Submit
					    </button>
				</span>
			</form>
		)
	}
}



// function mapStateToProps(state){
// 	return {
// 		books: state.books
// 	}; 
// }


function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch); 
}


// export default connect(mapStateToProps, mapDispatchToProps)(BookList); 

export default connect(null, mapDispatchToProps)(SearchBar); 
