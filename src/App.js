import './App.css';
import Layout from './Components/Layout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Todos from './Pages/Todos';
import Posts from './Pages/Posts';
import Users from './Pages/Users';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path='/gettodos/' component={Todos}></Route>
        <Route exact  path='/getposts/' component={Posts}></Route>
        <Route exact  path='/getusers/' component={Users}></Route>
        <Route  path='/' component={Home}></Route>
        </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
