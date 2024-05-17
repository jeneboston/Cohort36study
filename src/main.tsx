import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.tsx' */
/* import './index.css' */
import PlayGround from './components/PlayGround/PlayGround.tsx'
import Coctail from './components/Coctail/Coctail.tsx'
import CarShop from './components/CarShop/CarShop.tsx'
import Activity from './components/Activity/Activity.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Activity/>
    <CarShop/>
    <Coctail />
    <PlayGround />
    {/* <App /> */}
  </React.StrictMode>,
)
