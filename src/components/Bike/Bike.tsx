import React from 'react'

interface Props {
    gears: number
    brand: string
    price: number
    color: string
}

export default function Bike(props):JSX.Element {
const {gears, brand, price, color} = props

  return (
    <div style={{backgroundColor: color , color: 'white'}}> 
    Brand: {brand} Price: {price} Gears: {gears} Color: {color}
        </div>
  )
}