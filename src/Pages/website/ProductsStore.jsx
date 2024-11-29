import React from 'react'
import CategoryFilter from '../../components/website/CategoryFilter'
import StoreTrendingProduct from '../../components/website/StoreTrendingProduct'
import ProductShortOut from '../../components/website/ProductShortOut'
import StoreProductShow from '../../components/website/StoreProductShow'

export default function ProductsStore() {
  return (
    <div className='grid grid-cols-4 lg:container m-auto mt-6'>
    <div className='ps-10'>
    <CategoryFilter/>
    </div>
    <div className='col-span-3'>
        <StoreTrendingProduct/>
        <ProductShortOut/>
        <StoreProductShow/>
    </div>
    </div>
  )
}
