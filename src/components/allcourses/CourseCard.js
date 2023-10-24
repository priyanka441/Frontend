import React from 'react'
import { coursesCard } from '../../dummydata'
import "./courses.css"
import { Link } from 'react-router-dom'
import Form from '../login/Login'

export const CourseCard = () => {
  return (
    <>
    <section className='coursesCard'>
        <div className="container grid2">
            {coursesCard.map((val)=>{
                return(
                <div className='items'>
                <div className='content flex'>
                    <div className='left'>
                        <div className='img'>
                            <img src={val.cover} alt=""/>
                            </div>
                        </div>
                        <div className='text'>
                          
                            <h3>{val.coursesName}</h3>
                            <div className='rate'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <label htmlFor=''>(5.0)</label>

                                </div>
                                {/* //this bcz we are fetching nested API */}
                                <div className='details'>
                                    {val.courTeacher.map((details)=>(
                                        <>
                                        <div className='box'>
                                            <div className='dimg'>
                                                <img src={details.dcover} alt=""/>
                                                </div>
                                                <div className='para'>
                                                    <h4>{details.name}</h4>
                                                    
                                                    </div>

                                            </div>
                                            <span >{details.totalTime}</span>
                                            </>
                                    ))}
                                    </div>
                            </div>

                    </div>
                    <div className='price'>
                        <h3>
                            {val.priceAll}/{val.pricePer}
                        </h3>

                        </div>
                       <button className='outline' >  < Link to="/login">ENROLL NOW!! </Link></button>
                    </div>
                )
            })}

        </div>
    </section>
    </>
  )
}
