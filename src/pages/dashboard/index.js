import React from 'react'
import Breadcrumbs from '../../components/dashboard/common/Breadcrumbs'

const StarterPage = () => {
  const breadcrumbItems = [
    { title: 'Nazox', link: '/' },
    { title: 'Dashboard', link: '/dashboard' }
  ]

  return (
    <>
      <Breadcrumbs title="Dashboard" breadcrumbItems={breadcrumbItems} />
    </>
  )
}

export default StarterPage
