import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './../utils/routes.json';
import { connect } from 'react-redux';

//Pages
import Home from './Home';

class Main extends Component {
	render() {
		return (
			<div style={{ flex: 1 }}>
				<Router>
					<Switch>
						<Route path={routes.HOME} component={Home} />
					</Switch>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Main);
