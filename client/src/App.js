import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/App.css';

import IndexUI from './pages/IndexUI';
import FlightsUI from './pages/FlightsUI';
import ErrorPage from './pages/404';
// const IndexUI = lazy(() => import('./pages/IndexUI/index.js'));

// import BreakpointIndicator from './components/BreakpointIndicator';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={IndexUI} />
              <Route path="/flights" component={FlightsUI} />
              <Route component={ErrorPage} />
            </Switch>
          </BrowserRouter>
        </Suspense>
        {/* <BreakpointIndicator></BreakpointIndicator> */}
      </div>
    );
  }
}

export default App;