import {useState, useEffect} from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import Me from './component/me/Me';
import Work from './component/work/Work';
import Blog from './component/blog/Blog';
import Contact from './component/contact/Contact';
import React from 'react';
import './App.css'

function App() {
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className={loading ? 'App' : 'noneApp'}>
      { 
        loading ?
        <PropagateLoader color={"#323232"} loading={loading} size={10} />
        :
        <div>
          <Navbar/>
          <Home/>
          <Me/>
          <Work/>
          <Blog/>
          <Contact/>
        </div>
      }
    </div>
  )}

export default App;
