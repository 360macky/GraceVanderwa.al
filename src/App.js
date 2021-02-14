import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './pages/main/Navbar';
import Footer from './pages/main/Footer';

import Home from './pages/home/components/Home';
import Thread from './pages/thread/components/Thread';
import Post from './pages/post/components/Post';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/temas/:topic" component={Thread} />
        <Route exact path="/textos/:postId" component={Post} />
        <Route exact path="/cumple/:name" component={Post} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
