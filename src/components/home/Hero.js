import React, { useEffect, useState } from 'react'
import './hero.css'
import { Title } from '../common/title/Title'
import { Link, useNavigate } from 'react-router-dom'
import { Contact } from '../contact/Contact'
import { online } from '../../dummydata'


export const Hero = () => {
  const navigate = useNavigate();
  const [searchT, setSearch] = useState("");
  const searchItem = () => {
    const matches = online.filter(s => s.courseName.toLowerCase().includes(searchT.toLowerCase()));
    // console.log(matches)
    sessionStorage.setItem("SearchRes", JSON.stringify(matches))
    document.getElementById('onlineCoursesSection').scrollIntoView();
  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
            <div className='row'>
                <Title subtitle="WELCOME TO EDUSHALA" title="Best Online Education"/>
                <p>Review important concepts and explore new topics—the options are endless with Education.com! Join for free today and browse 
                    </p>
                    <div className='button'>
                        <button className='primary-btn' onClick={()=>{navigate('/') }}>  
                       Get Started Now!!<i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button className='abc' >
                         View Courses<i className='fa fa-long-arrow-alt-right'></i> 
                        </button>
                        </div>
                        <form className='form1' onSubmit={(e) => e.preventDefault()}>
                      
	                     <input type="text" value={searchT} onChange={(e) => setSearch(e.target.value) } placeholder="Search your favourite course"/>
                          
                      </form>
                         <button className='hello' onClick={() => searchItem()}>  <i className="fa-solid fa-magnifying-glass icon1"></i>     </button>              
                    </div>
        </div>
      </section>
      <div className='margin'>


      </div>
    
    </>
  )
}
