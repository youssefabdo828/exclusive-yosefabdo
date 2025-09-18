"use client"
import React from 'react'

export default function erorr({error}: {error : Error}) {
  return (
    <div>
    <h1>Somthing Went Wrong</h1>
    <p>{error.message}</p>
    </div>
  )
}
