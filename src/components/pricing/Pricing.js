import React from 'react'
import { Back } from '../common/back/Back'
import  {PriceCard } from './PriceCard'
import { Faq } from './Faq'
import "./price.css"

export const Pricing = () => {
  return (
    <>
    <Back  title="Choose the Right Path"/>
    <section className='price padding'>
        <div className='container grid'>
            <PriceCard/>

        </div>
    </section>
    <Faq/>
    </>
  )
}

