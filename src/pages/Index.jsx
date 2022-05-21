import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../public/styles/Index.scss'

function Index() {

    const URL = 'http://localhost:4000/api';

    const [trips, setTrips] = useState(null);
    const [style, setStyle] = useState("cont");

    const changeStyle = () => {
        if (style === 'cont') {
            setStyle('cont2');
        } else {
            setStyle('cont');
        }
    }

    async function getTrips() {
        const response = await fetch(URL);
        const data = await response.json();
        setTrips(data)
    }

    useEffect(() => {
        getTrips();
    }, [])

    const loaded = () => {
        return trips.map((trip) => (
            <div key={trip.river_id} className="trip">
                <h3>{trip.river_name}</h3>
                <Link to={`/trips`} className="link-element"><p>LINK</p></Link>
            </div>
        ));
    }
    const loading =() => {
        return <h1>Loading...</h1>
    }

    return (
        <>
        <h2 className={ style } onClick={ changeStyle }>Most Recent Trip</h2>
        <div className="rivers_return">
            {trips ? loaded() : loading()} 
        </div>
        
            
        </>
    )
}

export default Index