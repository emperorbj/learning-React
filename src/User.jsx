import { useState } from "react";

function User(){

    let [name,setName] = useState('bolaji')

    let [age,setAge] = useState(27)

    function changeAge(newAge){
        setAge(newAge)
    }

    function changeName(){
        setName('CEO Bolaji')
    }

    return(
        <div className="user-name">
            <h1>{name}</h1>
            <button onClick={changeName}> click</button>
{/* EVENT HANDLING WITH PARAMETERS */}
            <h1>{age}</h1>
            <button onClick={()=>{
                changeAge(45)
            }}> click</button>
        </div>
    )
}

export default User