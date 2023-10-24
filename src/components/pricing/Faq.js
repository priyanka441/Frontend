import React from 'react'
import { Title } from '../common/title/Title'
import { faq } from '../../dummydata'
import { useState } from 'react'
export const Faq = () => {
    const[click,setclick]=useState(false);
    const toggle=(index)=>{
        if(click===index){
            return setclick(null);
        }
        return setclick(index);
    }

  return (
 <>
 <Title subtitle="FAQS" title="Frequently Asked Questions"/>
 <section className='faq'>
    <div className='container'>
        {faq.map((val,index)=>(
            <div className='box'>
                <button className='accordion' onClick={()=>toggle(index)} key={index}>
                    <h2>{val.title}</h2>
                    <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </button>
              {click === index ? (
                <div className='text'>
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
        )

        )}
    </div>
 </section>
 </>
  )
}
