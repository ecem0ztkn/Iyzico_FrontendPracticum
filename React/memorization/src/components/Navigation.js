import React from "react";

function Header({ data,increment }) {
  console.log("header component rerendered ");
  return (
    <>
      <div>Header - {data}</div>
      <button onClick={increment}>Click</button>
    </>
    
  );
}

export default React.memo(Header);
