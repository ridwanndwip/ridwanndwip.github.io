import React from 'react';
import Navbar from '../src/Component/Navbar/Navbar.jsx'
import Hero from '../src/Component/Hero/Hero.jsx'
import About from '../src/Component/About/About.jsx'
// import Skills from '../src/Component/Skills/Skills.jsx'
import RecentWorks from '../src/Component/RecentWorks/RecentWorks.jsx'
import Service from '../src/Component/Service/Service.jsx'
import Footer from '../src/Component/Footer/Footer.jsx'
import Conversation from '../src/Component/Converstaion/Conversation.jsx'

import './App.css'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Skills/> */}
      <RecentWorks/>
      <Service/>
      <Conversation/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
