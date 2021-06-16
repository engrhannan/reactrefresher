import './App.css';
import Layout from './Components/Layout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DummyGrid from './Components/DummyGrid';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/getDummyGrid' component={DummyGrid}></Route>
        </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
