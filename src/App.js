import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Sortsa from "./components/Sortsa"
import Story from "./components/Story"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route
          path="/"
          render={({ location }) => (
            <Tabs component={'div'} value={location.pathname}>
              <Tab value={"/"} label={'Main'} component={Link} to={'/'}/>
              <Tab value={"/story"} label={'Story'} component={Link} to={'/story'} />
              <Tab value={"/sortsa"} label={'Sortsa'} component={Link} to={'/sortsa'} />
            </Tabs>
          )} />
          <Switch>
            <Route exact path={"/"} render={() => <p>Frontpage</p>} />
            <Route path={"/story"} component={Story} />
            <Route path={"/sortsa"} component={Sortsa} />
          </Switch>
      </header>
    </div>
  );
}

export default App;
