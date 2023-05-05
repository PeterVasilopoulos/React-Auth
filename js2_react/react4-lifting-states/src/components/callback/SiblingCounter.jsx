import React from 'react'

const SiblingCounter = (props) => {
  return (
    <fieldset style={{backgroundColor: "powderblue"}}>
    <legend> SiblingCounter.jsx</legend>
    <button onClick={props.editCount}> Edit Count!</button>

</fieldset>
  )
}

export default SiblingCounter