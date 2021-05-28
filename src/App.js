import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Create from "./components/Create";
import Edit from "./components/Edit";
import UsersContextProvider from "./contexts/usersContext";
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="container">
      <ToastContainer autoClose={1500} closeOnClick={false} />
      <UsersContextProvider>
        <Router>
          <Switch>
            <Route path="/edit/:id" component={Edit} />
            <Route path="/create" component={Create} />
            <Route path="/" component={Home} exact />
            <Route path="*" component={NotFound}/>
          </Switch>
        </Router>
      </UsersContextProvider>
    </div>
  );
}

export default App;
