import './App.css';
import Navbar from './components/Navbar';
import Cardpage from './components/Cardpage';
import Details from './components/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  var api_key = process.env.REACT_APP_NEWS_KEY

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'><Cardpage api_key={api_key} key="general" size={8} country="in" category="general" /></Route>
          <Route exact path='/business'><Cardpage api_key={api_key} key="business" size={8} country="in" category="business" /></Route>
          <Route exact path='/entertainment'><Cardpage api_key={api_key} key="entertainment" size={8} country="in" category="entertainment" /></Route>
          <Route exact path='/health'><Cardpage api_key={api_key} key="health" size={8} country="in" category="health" /></Route>
          <Route exact path='/science'><Cardpage api_key={api_key} key="science" size={8} country="in" category="science" /></Route>
          <Route exact path='/sports'><Cardpage api_key={api_key} key="sports" size={8} country="in" category="sports" /></Route>
          <Route exact path='/technology'><Cardpage api_key={api_key} key="technology" size={8} country="in" category="technology" /></Route>
        </Switch>
      </Router >

    </>
  );
}

export default App;
