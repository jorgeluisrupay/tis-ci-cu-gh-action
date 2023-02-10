import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Details } from './screens/Details'
import { MovieList } from './screens/MovieList'

export const Rute = () => {
  return (
    <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path='detail/:id' element={<Details /> } />
    </Routes>
  )
}
