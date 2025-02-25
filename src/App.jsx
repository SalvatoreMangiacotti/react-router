import { BrowserRouter, Routes, Route } from 'react-router-dom'


// DefaultLayout

import DefaultLayout from './layouts/DefaultLayout'


// HomePage

import HomePage from './pages/HomePage'


// AboutUs

import AboutUs from './pages/AboutUs'


// Pages

import PostsPage from './pages/PostsPage'

import PostsCreatePage from './pages/PostsCreatePage'

import PostsDetailsPage from './pages/PostsDetailsPage'



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

            <Route path='/posts'>

              <Route path='' element={<PostsPage />} />

              <Route path='create' element={<PostsCreatePage />} />

              <Route path=':id' element={<PostsDetailsPage />} />

            </Route>

          </Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
