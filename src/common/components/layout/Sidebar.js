import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
{/*import Avatar from 'react-avatar';*/}
import FontAwesome from 'react-fontawesome';


class Sidebar extends Component {


  constructor(props){
	super(props);
	this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	<div className="sidebar">

		  <div className="sidebar-item sidebar-footer">

        <span className="image avatar"><img src={require('../../../../styles/assets/avatar.jpg')} /></span>

		  </div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</Link>
		    <Link to="/portfolio" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Portfolio</Link>
		    <Link to="/services" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Services</Link>
		    <Link to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About</Link>
		  </nav>

		  <div className="sidebar-item sidebar-footer">

        <ul className="icons">
      				<li><a href="https://twitter.com/Lethalskillzz" className="icon fa-twitter"><span class="label"></span></a></li>
      				<li><a href="https://github.com/lethalskillzz" className="icon fa-github"><span class="label"></span></a></li>
      				<li><a href="https://linkedin.com/in/ibrahim-abdulkadir-900978117" className="icon fa-linkedin"><span class="label"></span></a></li>
      	</ul>

		  </div>

		</div>
    );
  }
}

export default Sidebar;
