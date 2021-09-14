import react, {useState, useEffect} from 'react';
import DotLoader from "react-spinners/DotLoader";
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
    }, 4000)
  }, [])
  return (
    <div className={loading ? 'App' : 'noneApp'}>
      { 
        loading ?
        <DotLoader color={"#ffffff"} loading={loading} size={70} />
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
