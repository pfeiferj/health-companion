import AppBar from './AppBar';
import {
  Switch,
  Route,
} from "react-router-dom";

export default function Layout() {
  return (
    <>
      <AppBar />
      <Switch>
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
