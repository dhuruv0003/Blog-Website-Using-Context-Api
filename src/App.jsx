import { useContext, useEffect, useState } from 'react'
import Blogs from "./components/Blogs"
import Header from './components/Header'
import Pagination  from './components/Pagination'
import './App.css'
import { appContext } from './context/appContext'

function App() {
 
  const {fetchData}=useContext(appContext)

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className=''>
     <Header></Header>
     <div className="w-[70%] bg-[#001d3d] mx-auto"> <Blogs></Blogs>
     <Pagination></Pagination></div>
    
    </div>
  )
}

export default App
