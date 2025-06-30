import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footers from './components/Footers/Footers'
import Home from './components/Home/Home'
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footers />
        </>
        // <Footer /> Always shown at the bottom of every page.   
        //  <Header />: Always shown at the top of every page.
        /* <Outlet />: Dynamically displays whatever child route is currently active (e.g. Home, About, Dashboard). */
    )
}

export default Layout
