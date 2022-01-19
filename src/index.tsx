import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";

const App:React.FC = () => {
	return (
		<div id="App" className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" render={() => <Home/>}/>
					<Route path="*" render={() => <Redirect to="/"/>}/>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

ReactDOM.render(
	<App/>, 
	document.getElementById('root')
);