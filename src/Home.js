import React, { PropTypes } from 'react'

import { browserHistory } from 'react-router';

class Home extends React.Component {
  handleClick(){
    browserHistory.push('work');
  }
  render () {
    return(
      <div className="jumbotron">
        <h1>欢迎光临</h1>
        <p>here is Newming 的 Concer</p>
        <p><a className="btn btn-primary btn-lg" role="button" onClick={this.handleClick.bind(this)}>我的工作</a></p>
      </div>
    )
  }
}

export default Home;
