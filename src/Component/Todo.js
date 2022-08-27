import React, {useState, useEffect} from "react";

export default function Todo() {
    const [doLists, setDoLists] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response=>response.json())
            .then(doLists =>{setDoLists(doLists)})
        }, []
    )


    return (
        <>

            <h1>Todo</h1>
            {
                doLists.map((item)=>{
                    return (
                        <h1 key={item.id}>{item.title}</h1>
                    )
                })
            }
        </>
    )
}

