import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route path='/watchlist' component={WatchList} exact />
          <Route path='/watched' component={Watched} />
          <Route path='/' component={Add} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
