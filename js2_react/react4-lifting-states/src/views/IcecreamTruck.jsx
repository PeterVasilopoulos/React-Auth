import React, { useState } from 'react'
import IcecreamForm from '../components/icecreamTruck/IcecreamForm';
import IcecreamTable from '../components/icecreamTruck/IcecreamTable';


// form input : onChange, variable that keeps changing
const IcecreamTruck = () => {
    // state variable to keep track of the icecream list
    const [icecreamList, setIcecreamList] = useState([]);


    const receiveNewOrder = (newIcecream) => {
        // push newIcecream into the list without .push
        setIcecreamList([...icecreamList, newIcecream])
    }

    const handleDelete = (deleteArrIdx) => {
        const filteredList = icecreamList.filter((eachIcecream, idx) =>
            idx !== deleteArrIdx)
        setIcecreamList(filteredList);
    }

    return (
        <div>
            <IcecreamForm onCreate={receiveNewOrder}/>

            <IcecreamTable 
                icecreamList={icecreamList} 
                onDelete={handleDelete}/>


        </div>
    )
}

export default IcecreamTruck