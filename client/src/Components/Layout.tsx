import AppBar from './AppBar';
import Login from '../Pages/Login';
import {
  Switch,
  Route,
} from "react-router-dom";

export default function Layout() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          About
        </Route>
        <Route path="/users">
          Users
        </Route>
        <Route path="/">
          Home
        </Route>
      </Switch>
    </>
  );
}
