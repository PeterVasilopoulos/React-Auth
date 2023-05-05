import React from 'react'

const IcecreamTable = (props) => {
  return (
    <div>
        <h1> Icecream Dashboard</h1> 
           <table>
                <thead>
                    <tr>
                        <td> Flavor</td>
                        <td> Quantity</td>
                        <td> Action </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.icecreamList.map((eachIcecream, idx) =>
                            <tr key={idx}>
                                <td>{eachIcecream.flavor}</td>
                                <td>{eachIcecream.quantity}</td>
                                <td>
                                    <button onClick={() => props.onDelete(idx)}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

    </div>
  )
}

export default IcecreamTable