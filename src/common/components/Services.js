import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

  render () {
    return (
      <div>

	      	<Banner />

      	  <div className="services">

      	  	<h3>Prototypes/MVPs</h3>

      	  	<p>I can build you a prototype or a minimal viable product (MVP)for your idea. An MVP can validate your idea and help you raise funding.
      	  	</p>

      	  	<p>The code I deliver will be the best possible foundations from which your application and idea can grow.</p>

	      	<h3>Training</h3>

	      	<p>I can help you or your employees develop their coding skills. I have been teaching code to both beginners and professionals for many years.</p>


	      </div>

	      <div className="services">

      	  	<h3>Enterprise Mobile Apps</h3>

      	  	<p>Whether you are a Start-up or Bluechip company, I can help you build you a production ready mobile application.
      	  	</p>

      	  	<p>The mobile application will be built with the best design principles and will be scalable, secure and maintainable.</p>

      	  	<h3>Hybridised Development</h3>

      	  	<p>Do you need a mobile app and web app with the same code base? I can code your web application so that it utilises React Native to build both a web application and a cross-device mobile application.</p>

	      </div>

      </div>
    );
  }
}

export default Services;
