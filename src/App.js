import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import About from './component/about/About';
import Portofolio from './component/portofolio/Portofolio';
import Note from './component/note/Note';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portofolio">
          <Portofolio />
        </Route>
        <Route path="/note">
          <Note />
        </Route>
      </Switch>
  </div>
 </BrowserRouter>
 )}

export default App;
