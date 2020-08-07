import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Main from './pages/layouts/main';
import Login from './pages/login';
import Logout from './pages/logout';
import Join from './pages/join';
import UserDetail from './pages/userDetail';
import Upload from './pages/upload';
import DeleteVideo from './pages/deleteVideo';
import EditVideo from './pages/editVideo';
import EditProfile from './pages/editProfile';
import Search from './pages/search';

function App() {
  const [isAuth, setAuth] = useState(false);

  const privateRouter = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/logout"
        render={props => <Logout {...props} setAuth={setAuth} />}
      />
      <Route exact path="/users/:id" component={UserDetail} />
      <Route exact path="/videos/upload" component={Upload} />
      <Route exact path="/videos/deleteVideo" component={DeleteVideo} />
      {/* <Route exact path="/videos/:id" component={VideoDetail} /> */}
      <Route exact path="/videos/:id" component={EditVideo} />
      <Route exact path="/users/:id" component={EditProfile} />
      <Route exact path="/videos/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  );
  const publicRouter = () => (
    <Switch>
      <Route
        exact
        path="/join"
        render={props => <Join {...props} setAuth={setAuth} />}
      />
      <Route
        exact
        path="/login"
        render={props => <Login {...props} setAuth={setAuth} />}
      />
      <Redirect from="*" to="/login" />
    </Switch>
  );

  return (
    <Main isAuth={isAuth}>{isAuth ? privateRouter() : publicRouter()}</Main>
  );
}

export default App;
