import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Error404 from "./pages/Error404";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import Upload from "./pages/Upload";
import Download from "./pages/Download";
function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Browse" component={Browse} />
        <Route exact path="/Upload" component={Upload} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
