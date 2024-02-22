import React from 'react'

import { Article, Brand, Cta, Feature, Navbar, } from './components'
import { Blog, Features, Header, Possibility, WhatGPTY1 } from './containers'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>

      <Brand/>
      <WhatGPTY1/>
      <Features/>
      <Possibility/>
      <Cta/>

      <Blog/>
      <Feature/>
    </div>
  )
}

export default App