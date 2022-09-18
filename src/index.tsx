import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home/Home";

const App:React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => <Home/>}/>
				<Route path="*" render={() => <Redirect to="/"/>}/>
			</Switch>
		</BrowserRouter>
	)
}

ReactDOM.render(
	<App/>, 
	document.getElementById('root')
);