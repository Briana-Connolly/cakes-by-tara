import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeScreen from './components/pages/HomeScreen';
import AboutScreen from './components/pages/AboutScreen';
import ServicesScreen from './components/pages/ServicesScreen';
import GalleryScreen from './components/pages/GalleryScreen';
import ContactScreen from './components/pages/ContactScreen';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/About' exact component={AboutScreen} />
            <Route path='/Services' exact component={ServicesScreen} />
            <Route path='/Gallery' exact component={GalleryScreen} />
            <Route path="/Contact" exact component={ContactScreen} />
          </Switch>
          <Footer />
      </Router>
    </>
    </div>
  );
}

export default App;
