import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Error404 from "./pages/Error404";
import LoginSignup from "./pages/LoginSignup";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route component={LoginSignup} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
