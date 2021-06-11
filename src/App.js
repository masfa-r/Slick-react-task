import './App.css';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import Management from './components/Management/Management';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <div>
      <SideBar/>
      </div>
      <div className="right-container">
       <Switch>
         <Route exact path = "/" >
           <Home/>
         </Route>
         <Route path = "/management/1" >
         <Management/>
         </Route>
       </Switch>
      </div>

    </div>
    </BrowserRouter>

  );
}

export default App;
