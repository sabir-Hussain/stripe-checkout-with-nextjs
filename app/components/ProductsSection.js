'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

function ProductsSection() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts();
    }, [])

    function getProducts() {
        axios.get('/api/getproducts')
        .then(res => {
            setProducts(res.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        
        {!products || products.length < 1 && <div>Loading products...</div>}

        {products && products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}

    </div>
  )
}

export default ProductsSection