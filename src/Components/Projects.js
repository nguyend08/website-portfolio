import React, {Component} from 'react';
import '../Styles/projects-styles.css'

export default class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  render() {
    return (
      <div className='projects-container'>
        <div className='projects-title'>
          <h1>Projects</h1>
        </div>
        <div className='projects-list'>
          <div></div>
        </div>
      </div>
    )
  }
}