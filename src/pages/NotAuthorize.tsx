import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotAuthorize = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>Cook</div> <button onClick={() => navigate(-1)}>cook lun</button>
    </>
  )
}

export default NotAuthorize
