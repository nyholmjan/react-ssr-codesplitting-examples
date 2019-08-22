import React from 'react';
import Loader from "./components/Loader"
import { Route, Link } from 'react-router-dom'
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import './App.css';


const Story = React.lazy(() => import('./components/Story'))
const Sortsa = React.lazy(() => import('./components/Sortsa'))

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
          <React.Suspense fallback={<Loader/>}>
            <Route exact path={"/"} render={() => <p>Frontpage</p>} />
            <Route path={"/story"} component={Story} />
            <Route path={"/sortsa"} component={Sortsa} />
          </React.Suspense>
        </header>
    </div>
  );
}

export default App;
