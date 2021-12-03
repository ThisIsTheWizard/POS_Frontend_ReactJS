import React from 'react'

const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <i className="ri-loader-line spin-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Loader
