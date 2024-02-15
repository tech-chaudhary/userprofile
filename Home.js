import React from 'react'

function Home() {
  const handelSubmit = ()=>{
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div> 
      <h2>welcome to home page</h2>


      <button on onClick={handelSubmit}>Logout</button>
    </div>
  )
}

export default Home
