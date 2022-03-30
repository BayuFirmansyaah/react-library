import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Trending from './pages/trending/Trending'
import Add from './pages/add/add';
import Detail from './pages/details-book/Detail';

function App() {
  return (
    <Router>
      <Navbar /> 
        <div className="container">
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/trending">
              <Trending />
            </Route>
            <Route path="/new-book">
              <Add />
            </Route>
            <Route path="/detail/book/:id">
              <Detail />
            </Route>
          </Switch>
        </div>
        </div>
    </Router>
  );
}

export default App;
