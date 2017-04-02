import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return <div>
    	<h1>React Router Tutorial</h1>
        <ul role="nav">
			<li><NavLink to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</NavLink></li>
		{/*<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>*/}
			<li><NavLink to="/about">About</NavLink></li>
			<li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        {this.props.children || <Home/>}
    </div>
  }
})