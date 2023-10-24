import React from 'react'
import { Header } from './components/common/heading/Header'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import { Home } from './components/home/Home'
import { About } from './components/about/About'
import { CourseHome } from './components/allcourses/CourseHome'
import { Team } from './components/team/Team'
import{ Pricing} from './components/pricing/Pricing'
import { Blog } from './components/blog/Blog'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import Form from './components/login/Login'
import Login from './components/login/Login'

export const App = () => {
  return (
    <>



    <Router>
    <Header/>
    <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
        <Route path="/courses" exact element={<CourseHome/>}></Route>
        <Route path="/team" exact element={<Team/>}></Route>
       <Route path="/pricing" exact element={<Pricing/>}></Route>
       <Route path="/journal" exact element={<Blog/>}></Route>
       <Route path="/contact" exact element={<Contact/>}></Route>
       <Route path="/login" exact element={<Login/>}></Route>
       <Route path="/home" exact element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  
    </>
  )
}
