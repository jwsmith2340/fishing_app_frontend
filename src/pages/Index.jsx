import { useState } from 'react'
import { Link } from 'react-router-dom'

function Index(props) {

    console.log('props.rivers: ', props.rivers)

    const loaded = () => {
        return props.rivers.map((river) => (
            <div key={river.fly_id} className="fly">
                <h1>{river.fly_name}</h1>
                <Link to={`/rivers/${rivers_id}`} className="link-element"><p>LINK</p></Link>
            </div>
        ));
    }
    const loading =() => {
        return <h1>Loading...</h1>
    }

    return (
        <>
        
        <div className="rivers_return">
            {props.rivers ? loaded() : loading()} 
        </div>
            
        </>
    )
}

export default Index