import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import Login from "./Login";
import { auth } from "./firebase";
import Home from "./Home";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>", authUser);
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home user={user} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
