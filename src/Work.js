import React, { PropTypes } from 'react'
import Card from './components/Card'
let cardDate=[
  {title:'第一天',desc:'描述',pic:'./src/images/1.jpg', url:'a'},
  {title:'第二天',desc:'描述',pic:'./src/images/2.jpg', url:'b'},
  {title:'第三天',desc:'描述',pic:'./src/images/3.jpg', url:'c'},
  {title:'第四天',desc:'描述',pic:'./src/images/4.jpg', url:'d'},
]

class Work extends React.Component {
  render () {
    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
          {cardDate.map((item,i) => <Card {...item} key={i} />)}
        </div>
      </div>
    )
  }
}

export default Work;
