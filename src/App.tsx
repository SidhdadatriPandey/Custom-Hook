import React from 'react'
import Tag from './Components/Tag'
import Random from './Components/Random'

const App: React.FC = () => {
  return (
    <div className='app'>
      <h1 className='title'>Random Gifs</h1>
      <Random/>
      <Tag/>
    </div>
  )
}

export default App

