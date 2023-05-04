import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import SearchMovies from './SearchMovies';

import SideBar from './SideBar';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <ContentWrapper />
          </Route>
          <Route path="/GenresInDb">
            <GenresInDb />
          </Route>
          <Route path="/LastMovieInDb">
            <LastMovieInDb />
          </Route>
          <Route path="/ContentRowMovies">
            <ContentRowMovies />
          </Route>
          <Route path="/search">
            <SearchMovies />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
