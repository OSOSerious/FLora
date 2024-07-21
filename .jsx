import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AISupport from './pages/AISupport';
import ProductRecommender from './pages/ProductRecommender';
import CommunityForum from './pages/CommunityForum';
import VRARFeatures from './pages/VRARFeatures';
import SmartHomeIntegration from './pages/SmartHomeIntegration';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ai-support" component={AISupport} />
          <Route path="/product-recommender" component={ProductRecommender} />
          <Route path="/community" component={CommunityForum} />
          <Route path="/vr-ar" component={VRARFeatures} />
          <Route path="/smart-home" component={SmartHomeIntegration} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;