import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AboutPage from '../pages/AboutPage/AboutPage'
import PageUnderCon from '../pages/PageUnderCon/PageUnderCon'
import NotFound from '../pages/NotFound/NotFound'
import ReservationsPage from '../pages/Reservations/ReservationsPage'

const AppRouter = () => {
  return (
    <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/menu' element={<PageUnderCon />} />
        <Route path='/reservations' element={<ReservationsPage />} />
        <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter