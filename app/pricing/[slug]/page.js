'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { usePathname } from 'next/navigation';
import PricingSection from '@/app/components/PricingSection';

function pricingPage() {
  const [pricingItems, setPricingItems] = useState([]);
  const pathname = usePathname()
  const slug= pathname.split('/').pop();

  console.log(slug)



  function getProducts() {
    axios.get('/api/getproducts')
    .then(res => {
      const product = res.data.data.find(product => product.metadata.slug === slug);
      getPricingByProductId(product.id);
    })
    .catch(err => {
        console.log(err);
    })
}


  function getPricingByProductId(productId) {
    axios.get(`/api/pricing`, {
        params: {
            productId: productId
        }
    })
    .then(res => {
      setPricingItems(res.data.data);
    })
    .catch(err => {
        console.log(err);
    })
}

useEffect(() => {
    getProducts();
}, [])


  const handleSubscribe = async ({priceId}) => {
    console.log('handleSubscribe called');

    const { data }  = await axios.post('/api/payment', {
      priceId: priceId,
    },
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },  
    })
    window.location.assign(data)
  }


  return (
    <div className="container mx-auto px-6">
      <PricingSection pricingItems={pricingItems} handleSubscribe={handleSubscribe} />
    </div> 
  )
}

export default pricingPage