import { useState } from 'react'
import './App.css'

function App() {
  return (
    <body>
      <div className='header'>
        <h1>Listbuilder</h1>
        <div className='searchBar'>
          <p className='searchText'>Search...</p>
        </div>
      </div>
      <div className='filterBar'>
        <h2>
          Filter by:
        </h2>
        <div className='bg-white'>
          <div className='filterButton'>Favorites</div>
          <div className='filterButton'>Meals</div>
          <div className='filterButton'>Snacks</div>
          {/*  <div className='filterButton'>Add New</div> */}
        </div>
      </div>
      <div className='listBody'>

      </div>
    </body>
  )
}

export default App
// I didn't need anything but the heading really; the vite + react docs and the counter weren't imortant  