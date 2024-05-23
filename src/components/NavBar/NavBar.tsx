import React from 'react'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

export default function NavBar():JSX.Element {
  return (
    <nav className={style.navigation}>
        <ul className={style.list}>
            <li className={style.listElement}>
                <NavLink to='/Coctail' className={style.link}>
                    Coctail
                </NavLink>
            </li>
            <li className={style.listElement}>
                <NavLink to='/Products' className={style.link}>
                    Products
                </NavLink>
            </li>
            <li className={style.listElement}>
                <NavLink to='/Counter' className={style.link}>
                    Counter
                </NavLink>
            </li>
            <li className={style.listElement}>
                <NavLink to='/CityPage' className={style.link}>
                    City Page
                </NavLink>
            </li>
            <li className={style.listElement}>
                <NavLink to='/Sandwitch' className={style.link}>
                Sandwitch
                </NavLink>
            </li>
            <li className={style.listElement}>
                <NavLink to='/RandomDog' className={style.link}>
                Dogs
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}
