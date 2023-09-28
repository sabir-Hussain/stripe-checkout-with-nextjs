import Image from 'next/image'
import ProductCard from './components/ProductCard'
import ProductsSection from './components/ProductsSection'
import Link from 'next/link'

export default function Home() {



  return (
    <div className="container mx-auto py-10 px-6">
      <ProductsSection />
    </div>
  )
}
