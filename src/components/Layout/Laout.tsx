import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'


export default function Laout():JSX.Element {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <footer>
        Here is GROUND
    </footer>
    </>
  )
}
