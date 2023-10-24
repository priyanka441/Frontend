import React, { useEffect, useState } from 'react'
import { Title } from '../common/title/Title'
import { online } from '../../dummydata'
import './courses.css'

export const OnlineCourses = () => {
const [items, setItems] = useState([]);
const [searchResH, setSearchResH]   = useState(true)
     useEffect(() => {
      if(sessionStorage.getItem("SearchRes")) {
        setItems(JSON.parse(sessionStorage.getItem("SearchRes")));
        // console.log(items)
        setSearchResH(true)
      } else {
        setItems(online);   
        setSearchResH(false);
       }


     })

     

  
  return (
  <>
    <section id="onlineCoursesSection" className='online'>
        <div className='container'>
            <Title subtitle='COURSES' title='Browse Our Online Courses'/>
            <div className='content grid3'>

            {
         (items.length == 0 && searchResH ? <>No Results found</> : items.map((val) => (
                <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                  </div>

                  
                    <h1>{val.courseName}</h1>
                    <span>{val.course}</span>
                    </div>
                    

    



            )))}
            </div>

            </div>
            </section>

  </>
  )
}
