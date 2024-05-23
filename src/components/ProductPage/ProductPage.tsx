import React, {  useEffect, useState } from 'react'
import style from './ProductPage.module.css'
import Product from '../Products/types/Product'
import { Link, useParams } from 'react-router-dom'

export default function ProductPage():JSX.Element {
  const {productId } = useParams()
  const [product, setProduct] = useState<Product | undefined>(undefined)
  async function fetchProduct():Promise<void> {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const obj = await res.json()
    setProduct(obj)
  }

  useEffect(()=>{
    fetchProduct();
  },[productId])

  return (
    <div>Product Page
      <p>{product?.title}</p>
      <p>{product?.price}</p>
      <p>{product?.description}</p>
      <p>{product?.category}</p>
      <img className={style.img} src={product?.image} alt=''/>
      <Link to='..'>К списку товаров</Link>
    </div>
  )
}
