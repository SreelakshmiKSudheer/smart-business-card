import React from 'react'
import { Route, Routes } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import Login from '../pages/auth/Login'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<MainLayout/>}>

        </Route>
    </Routes>
  )
}

export default AppRoutes
