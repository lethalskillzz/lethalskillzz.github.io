import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      		<Banner />

      	  <div className="about">

      	  	<h3>About Me</h3>


              <p>I am forward thinking engineer offering more than four years of experience in both back-end and front-end software development.</p>

              <p>As a software engineer living in Abuja, one of the leading tech cities in Africa, i had the opportunity of working with tech companies in the design and development of software for banks, medical organizations, and city administrations.</p>

              <p>My main forté may be predominantly native mobile (iOS, Android) development on the front-end and (PHP, NodeJS) on the back-end but i also have extensive experience in front-end web development </p>

              <p>I enjoy developing software from the ground up, learning new technologies, refactoring legacy code, contributing to opensource and tinkering with IoT.</p>

	      </div>

	      <div className="repos">
	      	<h3><a href="https://github.com/lethalskillzz?tab=repositories" target="_blank">My GitHub</a> Repos</h3>
	        {isFetching && results.length === 0 &&
	          	<Loader />
	        }
	        {!isFetching && error && results.length === 0 &&
	          <h3 className="post-error">There has been an Error</h3>
	        }
	        {!isFetching && !error && results.length === 0 &&
	          <h3>Empty</h3>
	        }
	        {results.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Repos results={results} />
	          </div>
	        }
	      </div>

      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;
