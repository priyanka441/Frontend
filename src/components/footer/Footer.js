import React from 'react'
import './footer.css'
import { blog } from '../../dummydata'

export const Footer = () => {
  return (
    <>
    <section className='newletter'>
        <div className='container flexSB'>
            <div className='left row'>
                <h1>Newsletter-Stay tuned and get the latest Updates</h1>
                <span>Far Far away,behind the word Mountains</span>
            </div>
            <div className='right row'>
                <input type='text' placeholder="Enter email address "/>
                <i className='fa fa-paper-planne'></i>
                <button className='submitz'>Submit</button>
            </div>
        </div>
        </section>
        {<footer>
            <div className='container padding'>
                <div className='box logo'>
                    <p>EDUSHALA</p>
                    <span>Online Education And Learning</span>
                    <p>The Way to Open your doors towards the future.HAVE A BRIGHT FUTURE!!!</p>
                    <i className="fab fa-facebook-f icon "></i>
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-twitter icon"></i>
                <i className="fab fa-youtube icon"></i>
                </div>
                <div className="box link">
                    <h3>Explore</h3>
                    <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
         
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}

                </div>
                <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Lajpat Nagar,Delhi
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 36584641122
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
                </div>
                </div>
         
        </footer> }
        <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Priyanka
        </p>
      </div>
        </>
  )
}
