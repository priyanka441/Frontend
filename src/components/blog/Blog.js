import React from 'react'
import { Back } from '../common/back/Back'
import { BlogCard } from './BlogCard'

export const Blog = () => {
  return (
    <>
    <Back title='Blog Posts' />
    <section className='blog padding'>
      <div className='container grid2'>
        <BlogCard />
      </div>
    </section>
  </>
  )
}
