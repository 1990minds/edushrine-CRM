import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../src/components/homepage/index'
import Sectionone from './components/blog/sectionone'
import Newsone from './components/blog/sectionone'
import Loginpage from './components/profile/loginpage'

import Contact from './components/contact'



export default function App() {
  return (
    <div>

       <Routes >
       <Route exact path ='/login' element ={<Loginpage/>}/>
       <Route exact path="/" element={<Homepage/>}/>
       <Route exact path="/mainPage" element={<Sectionone/>}/>
       {/* <Route exact path="/news" element={<Newsone/>}/> */}

    
       {/* <Route path="/contact" element={<Contact/>}/> */}

       </Routes>
       

    </div>
  )
}
