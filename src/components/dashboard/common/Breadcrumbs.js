import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'

const Breadcrumbs = (props) => {
  const itemsLength = props.breadcrumbItems.length

  return (
    <>
      <Row>
        <Col xs={12}>
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="mb-0">{props.title}</h4>

            <div className="page-title-right">
              <Breadcrumb listClassName="m-0">
                {props.breadcrumbItems.map((item, key) =>
                  key + 1 === itemsLength ? (
                    <BreadcrumbItem key={key} active>
                      {item.title}
                    </BreadcrumbItem>
                  ) : (
                    <BreadcrumbItem key={key}>
                      <Link to={item.link}>{item.title}</Link>
                    </BreadcrumbItem>
                  )
                )}
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Breadcrumbs