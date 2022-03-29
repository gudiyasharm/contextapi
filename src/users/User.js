import React from 'react'

const User = ({name, city}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{city}</p>
    </div>
  )
}

export default User