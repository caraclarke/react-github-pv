import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  
  constructor(props) {
    suoer(props);
    this.state = { // initial state
      username: 'caraclarke',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }
  // this.state main component
  // this.props nested components
  render () {
    return (
      {this.state.username}
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