import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Catageory from './components/Catageory';
import Navbar from './components/Navbar';
import Meetup from './components/Meetup';
import Create from './components/Create';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     

      <Switch>
        <Route exact path="/">
          <Navbar />
          <Catageory></Catageory>
        </Route>
        <Route path="/signup">
           <Navbar></Navbar>
          <Signup></Signup>
        </Route>
        <Route path="/meet">
          <Navbar></Navbar>
          <Meetup></Meetup>
        </Route>
        <Route path="/create">
          <Navbar></Navbar>
          <Create></Create>
        </Route>
        </Switch>
     
    </div>
  );
}

export default App;
