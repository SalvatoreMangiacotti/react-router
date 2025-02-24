import { BrowserRouter, Routes, Route } from 'react-router-dom'


// DefaultLayout

import DefaultLayout from './layouts/DefaultLayout'


// HomePage

import HomePage from './pages/HomePage'


// AboutUs

import AboutUs from './pages/AboutUs'


// PostsList

import PostsList from './pages/PostsList'


// Css

import './App.css'


function App() {

  return (

    <>

      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>

            <Route path='/' element={<HomePage />} />

            <Route path='/about' element={<AboutUs />} />

            <Route path='/postslist' element={<PostsList />} />

          </Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
