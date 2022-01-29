import React from 'react'
import SimpleBar from 'simplebar-react'
import LeftSidebarContent from './LeftSidebarContent'

const LeftSidebar = (props) => {
  return (
    <>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {props.type !== 'condensed'
            ? (
            <SimpleBar style={{ maxHeight: '100%' }}>
              <LeftSidebarContent />
            </SimpleBar>
              )
            : (
            <LeftSidebarContent />
              )}
        </div>
      </div>
    </>
  )
}

export default LeftSidebar
