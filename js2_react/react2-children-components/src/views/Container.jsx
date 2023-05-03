import React from 'react'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'

const Container = (props) => {
  return (
    <fieldset>
        <legend> Container.jsx</legend>
        {props.children}
    </fieldset>
  )
}

export default Container