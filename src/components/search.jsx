import React from 'react';

class Search extends React.Component
{
    constructor(props)    
    {
        super(props);        
        this.state = 
        {    
            tags : ""
        };
    }

    handleForm = (event) =>
    {        
        event.preventDefault();        
        this.props.onSubmit(this.state.tags);        
    }
    
    render()
    {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <input type="text" placeholder="Tags" value={this.state.tags} onChange={(e) => this.setState({tags: e.target.value}) } />
                </form>
                {this.state.tags}
            </div>
        );
    }
}

export default Search;