import React, { useEffect, useState } from 'react'

const DefaultLayout = (props) => {
  const [isShowPreloader, setIsShowPreloader] = useState(true)
  useEffect(() => {
    setIsShowPreloader((isShowPreloader) => !isShowPreloader)
  }, [])

  return (
    <>
      {isShowPreloader ? (
        <div id="preloader">
          <div id="status">
            <div className="spinner">
              <i className="ri-loader-line spin-icon"></i>
            </div>
          </div>
        </div>
      ) : null}

      <>{props.children}</>
    </>
  )
}

export default DefaultLayout
