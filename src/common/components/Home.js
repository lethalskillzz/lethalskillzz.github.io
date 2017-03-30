import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">

        <div className="post banner">
			    <h1 className="post-title">I am <em>avid</em> at <em>building</em>, <em>integrating</em>, <em>testing</em> and <em>supporting</em> mobile applications on both <em>Android</em> and <em>iOS</em> platforms
               while implementing the Back-End <em>REST API</em> in <em>PHP</em> and <em>NodeJS</em>.</h1>
    			<p>for <em>agencies</em>, <em>bluechips</em>, <em>start-ups</em> and sometimes, <em>myself</em>. <a href="#" onClick={this.eventToggleSidebar}> Find out More</a></p>

			</div>

		  	<div className="post clearfix">

				<h2>Technologies I work with:</h2>

          <div className="skill-item clearfix">
            <h4>Mobile</h4>
            <ul className="">
              <li><em><b>*</b><b>*</b>Android SDK</em>
                <ul>
                  <li><em><b>*</b>Java</em></li>
                  <li><em><b>*</b>XML</em></li>
                  <li><em><b>*</b>SQLite</em></li>
                  <li><em><b>*</b>Groovy</em></li>
                </ul>
              </li>

              <li><em><b>*</b><b>*</b>Android NDK</em>
                <ul>
                  <li><em><b>*</b>C/C++</em></li>
                </ul>
              </li>

              <li><em><b>*</b><b>*</b>iOS</em>
                <ul>
                  <li><em><b>*</b>Swift 3</em></li>
                </ul>
              </li>
            </ul>
          </div>


				<div className="skill-item clearfix">
					<h4>Web</h4>
					<ul className="">
						<li><em><b>*</b><b>*</b>React JS</em>
							<ul>
								<li><em><b>*</b>HTML</em></li>
                <li><em><b>*</b>CSS</em></li>
                <li><em><b>*</b>Javascript</em></li>
							</ul>
						</li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side</h4>
					<ul>
            <li><em><b>*</b><b>*</b>Slim Framework</em>
							<ul>
								<li><em><b>*</b>PHP</em></li>
                <li><em><b>*</b>MySQ</em></li>
							</ul>
						</li>
						<li><em><b>*</b><b>*</b>Node JS</em>
							<ul>
								<li><em><b>*</b>Express JS</em></li>
                <li><em><b>*</b>MongoDB</em></li>
							</ul>
						</li>
					</ul>
				</div>


  			</div>


  			<div className="post clearfix">

				<h2>Companies I have worked with:</h2>

				<ul className="clients">
					<li className="goldmans-logo">Goldman Sachs</li>
					<li className="orange-logo">Orange</li>
				</ul>

			</div>

			<Banner />

  		</div>

    );
  }
}

export default Home;
