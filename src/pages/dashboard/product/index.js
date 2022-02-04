import React from 'react'
import Breadcrumbs from '../../../components/dashboard/common/Breadcrumbs'

const Product = () => {
  const breadcrumbItems = [
    { title: 'Nazox', link: '/' },
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Product', link: '/dashboard/product' }
  ]

  return (
    <>
      <Breadcrumbs title="Product" breadcrumbItems={breadcrumbItems} />

      <h1>Hello World!</h1>
    </>
  )
}

export default Product
