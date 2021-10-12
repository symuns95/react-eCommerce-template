import React from "react";
import router from "./router/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import HeaderMain from "./components/Header/headerMain";
const App = () => {
  return (
    <Router>
      <HeaderMain />
      <Switch>
        {router.map((route) => {
          return <Route exact={route.exact} path={route.path} component={route.component} />;
        })}
      </Switch>
    </Router>
  );
};

export default App;
