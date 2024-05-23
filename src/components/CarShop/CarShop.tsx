import React from 'react'
import Car from '../Car/Car'
import Bike from '../Bike/Bike'
import img from './img/1.jpeg'
import img2 from './img/2.jpeg'
import img3 from './img/3.jpeg'
import img4 from './img/4.jpeg'

export default function CarShop() {
  return (
    <div>
        <h1>CAR SHOP</h1>
        
        {/* вызываем */}

        <Car brand='Mercedes' color = 'black'/>
        <Car brand='Porshe' color = 'green'/>
        <Car brand='BMW' color = 'red'/>
        <Car brand='Toyota' color = 'yellow'/>

        <h2>BIKE SHOP</h2>
        <div>
          <h2>Yamaha</h2>
          <img src= {img} alt="" />
        <Bike brand='Yamaha' price = {1000} gears = {2} color = 'blue'/>
        </div>
        <div>
          <h2>Honda</h2>
        <img src= {img2} alt="" />
        <Bike brand='Honda' price = {2000} gears = {3} color = 'black'/> 
        </div>
        <div>
          <h2>Suzuki</h2>
        <img src= {img3} alt="" />
        <Bike brand='Suzuki' price = {3000} gears = {4} color = 'red'/>
        </div>
        <div>
          <h2>Kawasaki</h2>
        <img src= {img4} alt="" />
        <Bike brand='Kawasaki' price = {4000} gears = {5} color = 'green'/>
        </div>
    </div>
  )
}
