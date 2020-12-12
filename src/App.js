import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path='/menu'>
            <Header />
            <Menu />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
