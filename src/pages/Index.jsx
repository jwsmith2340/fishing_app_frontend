import { useState } from 'react'
import { Link } from 'react-router-dom'

function Index(props) {

    console.log('props.rivers: ', props.rivers)

    const loaded = () => {
        return props.rivers.map((river) => (
            <div key={river.fly_id} className="fly">
                <h1>{river.fly_name}</h1>
            </div>
        ));
    }
    const loading =() => {
        return <h1>Loading...</h1>
    }

    return (
        <>
            {props.rivers ? loaded() : loading()} 
        </>
    )
}

export default Index