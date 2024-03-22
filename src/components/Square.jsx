import React from 'react'

export default function Square({value ,onSquareclick}) {
  return (
    <>
    <button className="Square" onClick={onSquareclick}>{value}</button>
      
    </>
  )
}
