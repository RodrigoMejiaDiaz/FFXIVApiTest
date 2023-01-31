import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  const {userId} = useParams()
  let who = userId || 'page'
  return (
    <h2>About {who}</h2>
  )
}

export default About