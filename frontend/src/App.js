import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Main from './pages/layouts/main';
import Login from './pages/login';
import Logout from './pages/logout';
import Join from './pages/join';
import UserDetail from './pages/userDetail';
import Upload from './pages/upload';
import DeleteVideo from './pages/deleteVideo';
import VideoDetail from './pages/videoDetail';
import EditVideo from './pages/editVideo';
import EditProfile from './pages/editProfile';
import Search from './pages/search';

function App() {
  const [routes, setRoutes] = useState({});
  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setRoutes(res.routes);
      });
  }, []);
  console.log(`${routes.users}${routes.userDetail}`);
  return (
    <Main routes={routes}>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.join} component={Join} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.logout} component={Logout} />
        <Route exact path="/users/:id" component={UserDetail} />
        <Route
          exact
          path={`${routes.videos}${routes.upload}`}
          component={Upload}
        />
        <Route exact path={routes.deleteVideo} component={DeleteVideo} />
        <Route exact path={routes.videoDetail} component={VideoDetail} />
        <Route exact path={routes.editVideo} component={EditVideo} />
        <Route exact path={routes.editProfile} component={EditProfile} />
        <Route
          exact
          path={`${routes.videos}${routes.search}`}
          render={() => <Search routes={routes} />}
        />
      </Switch>
    </Main>
  );
}

export default App;
