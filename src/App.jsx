import { useState } from 'react'
import Blogs from "./components/Blogs"
import Header from './components/Header'
import Pagination from './components/Pagination'


import './App.css'

function App() {
 

  return (
    <div>
     <Header></Header>
     <Blogs></Blogs>
     <Pagination></Pagination>
    </div>
  )
}

export default App
