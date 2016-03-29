import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = { // initial state
      username: 'caraclarke',
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }
  // get user data from github
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ userData: data });
      }.bind(this),
      error: function(xhr, status, error) {
        this.setState({ username: null });
        console.log(error, status);
      }.bind(this)
    });
  }
  
  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ userRepos: data });
      }.bind(this),
      error: function(xhr, status, error) {
        this.setState({ username: null });
        console.log(error, status);
      }.bind(this)
    });
  }
  
  handleFormSubmit(username) {
    alert(username);
  }
  
  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }
  
  // this.state main component
  // this.props nested components
  render () {
    
    return (
      <div>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
        <Profile {...this.state} />
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: '70bf6e347b41d53fe9ac',
  clientSecret: '84da34924989a93d7601ceacd254a61417298b5a'
}

export default App;