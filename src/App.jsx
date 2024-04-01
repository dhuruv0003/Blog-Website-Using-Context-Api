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
    <div className='w-[70%] bg-[#001d3d] mx-auto'>
     <Header></Header>
     <Blogs></Blogs>
     <Pagination></Pagination>
    </div>
  )
}

export default App
