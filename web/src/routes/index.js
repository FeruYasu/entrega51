import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import CreateRoom from '../pages/CreateRoom';
import Stand from '../pages/Stand';
import CoffeeRoom from '../pages/CoffeeRoom';
import StandAdmin from '../pages/StandAdmin';
import Lecture from '../pages/Lecture';
import Schedule from '../pages/Schedule';
import Challenges from '../pages/Challenges';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={SignUp} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/palestra/:id" component={Lecture} isPrivate />
      <Route path="/stand/:id" component={Stand} isPrivate />
      <Route path="/coffee" component={CoffeeRoom} isPrivate />
      <Route path="/desafios" component={Challenges} isPrivate />
      <Route path="/standadmin/:id" component={StandAdmin} isPrivate />
      <Route path="/profile" component={Profile} isPrivate form />
      <Route path="/createroom" component={CreateRoom} isPrivate form />
      <Route path="/schedule" component={Schedule} isPrivate />
      <Route path="/stand" component={Stand} isPrivate />
    </Switch>
  );
}
