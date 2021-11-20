import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../components/dashboard/common/Breadcrumbs'

const StarterPage = () => {
  const breadcrumbItems = [
    { title: 'Nazox', link: '/' },
    { title: 'Dashboard', link: '/dashboard' }
  ]

  return (
    <>
      <div className="page-content">
        TEST
        <Container fluid>
          <Breadcrumbs title="Dashboard" breadcrumbItems={breadcrumbItems} />
        </Container>
      </div>
    </>
  )
}

export default StarterPage
