import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Error404 from "./pages/Error404";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse"
import S3 from "./pages/S3"
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Browse} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
