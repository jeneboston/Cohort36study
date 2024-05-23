import React from 'react'
import Flower from '../Flower/Flower'

export default function FlowerShop():JSX.Element {
  return (
    <div>
        <h1>Flower Shop</h1>
        <Flower title="Rose" color="red" price={100} family="Roses"/>
        <Flower title="Tulip" color="purple" price={200} family="Tulips"/>
        <Flower title="Daisy" color="yellow" price={300} family="Daisies"/>
        <Flower title="Lily" color="yellowgreen" price={400} family="Lilies"/>
    </div>
  )
}
