import React from 'react'
import { Hero } from './Hero'
import { AboutCard } from '../about/AboutCard'
import { OnlineCourses } from '../allcourses/OnlineCourses'
import { CourseCard } from '../allcourses/CourseCard'
import { Team } from '../team/Team'
import TeamCard from '../team/TeamCard'
import { Test } from './testimonials/Test'
import { Faq } from '../pricing/Faq'
import { BlogCard } from '../blog/BlogCard'
import { Pricing } from '../pricing/Pricing'
import { PriceCard } from '../pricing/PriceCard'







export const Home = () => {
  return (
    <>
    <Hero/>

    <AboutCard/>
    <OnlineCourses/>
    <Test/>
    <Faq/>
    
  
  
    </>
  
  )
}
