import React, {Component} from 'react';

class Search extends Component{
  
  onSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  render () {
    
    var searchStyle = {
      marginBottom: 25
    }
    
    return (
      <div style={searchStyle}>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search Github Users</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    )
  }
}

export default Search;