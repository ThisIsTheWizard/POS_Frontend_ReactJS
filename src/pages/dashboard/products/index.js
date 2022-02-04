import React from 'react'
import Breadcrumbs from '../../../components/dashboard/common/Breadcrumbs'

const Products = () => {
  const breadcrumbItems = [
    { title: 'Nazox', link: '/' },
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Products', link: '/dashboard/products' }
  ]

  return (
    <>
      <Breadcrumbs title="Products" breadcrumbItems={breadcrumbItems} />

      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </h1>
    </>
  )
}

export default Products
