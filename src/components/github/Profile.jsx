import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component{
  
  render () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.userData.name}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img src={this.props.userData.avatar_url} className="thumbnail" style={{width:'100%'}} />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <span className="label label-primary">{this.props.userData.public_repos} Repos</span>
                  <span className="label label-success">{this.props.userData.public_gists } Gists</span>
                  <span className="label label-info">{this.props.userData.followers} Followers</span>
                  <span className="label label-danger">{this.props.userData.following} Following</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;