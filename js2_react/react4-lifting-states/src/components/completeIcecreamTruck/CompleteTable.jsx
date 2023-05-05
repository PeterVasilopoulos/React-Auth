import React from 'react'

const CompleteTable = (props) => {

    const handleDeleteButton = (idx)=>{
        // call api to delete on database
        props.onDelete(idx)
    }

    return (
        <div>
            <h3> Icecream list</h3>
            <table>
                <thead>
                    <tr>
                        <td> Flavor</td>
                        <td> Quantity</td>
                        <td> Chocolate chip</td>
                        <td> Urgent?</td>
                        <td> Action </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.icecreamList.map((eachIcecream, idx)=>(
                            <tr key={idx} style={eachIcecream.isUrgent? {color: "red"}: {color: "blue"}}>
                                <td> {eachIcecream.flavor}</td>
                                <td> {eachIcecream.quantity}</td>
                                <td> {eachIcecream.chocoChip?"Yes":"No"}</td>
                                <td>
                                    <input type="checkbox" checked={eachIcecream.isUrgent}
                                    onChange={(e)=>props.onToggle(idx, e.target.checked)}
                                    />
                                </td>
                                <td>
                                    <button onClick={()=>handleDeleteButton(idx)}>Delete</button>
                                </td>
                            
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default CompleteTable