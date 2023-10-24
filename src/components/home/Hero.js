import React from 'react'
import './hero.css'
import { Title } from '../common/title/Title'
import { Link, useNavigate } from 'react-router-dom'
import { Contact } from '../contact/Contact'


export const Hero = () => {
  const navigate = useNavigate();
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
                        {/* <form className='form1'>
                      
	                     <input type="text" placeholder="Search your favourite course"/>
                          
                      </form>
                         <button className='hello'>  <i className="fa-solid fa-magnifying-glass icon1"></i>     </button>               */}
                    </div>
            </div>
        </div>
      </section>
      <div className='margin'>


      </div>
    
    </>
  )
}
