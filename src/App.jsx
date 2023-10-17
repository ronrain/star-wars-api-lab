// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import ShipList from './pages/ShipList/ShipList'
import ShipDetailsWithoutLocationHook from './pages/ShipDetailsWithoutLocationHook/ShipDetailsWithoutLocationHook'
import Nav from './components/Nav/Nav'

import './App.css'

function App() {

  return (
    <>
    <Nav />
      <Routes>
        <Route path='/ships' element={<ShipList />} />
        <Route path='/ships/:shipId' element={<ShipDetailsWithoutLocationHook />} />
      </Routes>
    </>
  )
}

export default App
