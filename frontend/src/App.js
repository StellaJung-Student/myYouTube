import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
  return (
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/users/:id" component={UserDetail} />
        <Route exact path="/videos/upload" component={Upload} />
        <Route exact path="/videos/deleteVideo" component={DeleteVideo} />
        {/* <Route exact path="/videos/:id" component={VideoDetail} /> */}
        <Route exact path="/videos/:id" component={EditVideo} />
        <Route exact path="/users/:id" component={EditProfile} />
        <Route exact path="/videos/search" component={Search} />
      </Switch>
    </Main>
  );
}

export default App;
