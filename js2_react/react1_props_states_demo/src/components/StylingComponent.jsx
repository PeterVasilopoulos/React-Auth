import React from 'react'
// 1. direct import
import "../css/styles.css"
// 3. css modules
import styles from './StylingComponent.module.css'

const StylingComponent = () => {
    const inlineStyle2 = {
        backgroundColor : "navy",
        color: "white"
    }

    return (
        <div>
            <h1> Styling demo</h1>
            <p className='directImport'> 1. direct import</p>
            <p style={{ backgroundColor: "orange", color: "white" }}> 2.1 inline style</p>
            <p style={inlineStyle2}> 2.2 inline style</p>
            <p className={styles.cssmodule}> 3. css modules</p>


        </div>
    )
}

export default StylingComponent