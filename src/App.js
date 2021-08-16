import {
  BrowserRouter,
  Switch,
  Route,
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
        <Route path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
        <Route path="/portofolio" component={Portofolio}/>
        <Route path="/note" component={Note}/>
      </Switch>
  </div>
 </BrowserRouter>
 )}

export default App;
