import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import Me from './component/me/Me';
import Work from './component/work/Work';
import Blog from './component/blog/Blog';
import Contact from './component/contact/Contact';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Home/>
      <Me/>
      <Work/>
      <Blog/>
      <Contact/>
    </React.Fragment>
  )}

export default App;
