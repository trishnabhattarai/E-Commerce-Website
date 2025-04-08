import React from 'react'
import { Link } from 'react-router-dom'

export default function Errorpage() {
  return (
    <>
    <img src='/photo/46.gif' alt='' style={{marginLeft:"400px",marginTop:"10px"}}></img>
    <div>
    <Link to="/"><button
                className="btn btn-secondary"
                style={{marginLeft:"550px",width: '200px'}}
              >
                Go Back TO Home
              </button></Link>
              </div>
    </>
  )
}
