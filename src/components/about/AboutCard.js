import React from 'react'
import { Title } from '../common/title/Title'
import { Home } from '../home/Home'
import { homeAbout } from '../../dummydata'
import { AWrapper } from './AWrapper'
import './about.css'

export const AboutCard = () => {
  return (
    <>
    <section className='aboutHome'>
        <div className='container flexSB'>
            <div className='left row'>
                <img src="https://img.freepik.com/free-photo/young-smiling-asian-girl-student-floating-midair-with-using-laptop_74952-3114.jpg?w=1060&t=st=1696954174~exp=1696954774~hmac=bb1d9dd069ac278d19d9a285b3e936602ce8e542f57cc809a4d55ec7f745591f"></img>
            </div>
            <div className='right row'>
            <Title subtitle="LEARN ANYTHING" title="Benefits  About Online Learning Expertise"/>
            <div className='items'>
                {homeAbout.map((val)=>(
                    <div className='item flexSB'>
                        <div className='img'>
                            <img src={val.cover} alt=""></img>

                        </div>
                        <div className='text'>
                            <h2>{val.title}</h2>
                            <p>{val.desc}</p>

                        </div>
                        </div>


                ))}
                
            </div>
           
      
        </div>
        </div>
    </section>
    <AWrapper/>
    </>
  )
}
