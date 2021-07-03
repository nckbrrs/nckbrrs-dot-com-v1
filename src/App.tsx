import React from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import Stuff from "./views/Stuff";


class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route
                        exact path="/"
                        render={() => <Home/>}
                    />
                    <Route
                        exact path="/stuff"
                        render={() => <Stuff/>}
                    />
                    <Route
                        path="*"
                        render={() => <Redirect to="/"/>}
                    />
                </Switch>
            </div>
        )
    }
}

export default App;