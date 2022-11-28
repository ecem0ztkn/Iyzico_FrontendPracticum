import React from 'react'

function Header({data}) {
    console.log("header component rerendered ");
  return (
    <div>Header - {data}</div>
  )
}

export default React.memo(Header)