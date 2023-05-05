import React, { useState } from 'react'
import CompleteForm from '../components/completeIcecreamTruck/CompleteForm';
import CompleteTable from '../components/completeIcecreamTruck/CompleteTable';

const CompleteIcecreamTruck = () => {
    const [icecreamList, setIcecreamList] = useState([]);

    const receiveNewOrder = (newIcecream)=>{
        setIcecreamList([...icecreamList, newIcecream]);
    }

    // to delete
    const handleDelete = (deleteIdx) =>{
        const filteredList = icecreamList.filter((eachIcecream, idx)=> idx!== deleteIdx);
        setIcecreamList(filteredList);
    }

    // to toggle checked
    const handleUrgent = (idx, updateBool)=>{ // idx: array pos, updateBool : true/false
        const updatedList = [...icecreamList];
        updatedList[idx].isUrgent = updateBool;
        setIcecreamList(updatedList);
    }

    return (
        <div>
            <h1> Welcome to my icecream truck</h1>
            <CompleteForm onCreate = {receiveNewOrder}/>
            <CompleteTable 
                icecreamList={icecreamList} 
                onDelete={handleDelete}
                onToggle={handleUrgent}/>
        </div>
    )
}

export default CompleteIcecreamTruck