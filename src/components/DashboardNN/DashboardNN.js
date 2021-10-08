import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications';
import { connect } from 'react-redux'

class DashboardNN extends Component {
  render() {
    
    // console.log(this.props);
    const { projects } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
      <div className="auth token">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</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(DashboardNN)