import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Index() {

    const URL = 'http://localhost:4000/api';

    const [trips, setTrips] = useState(null);

    async function getTrips() {
        const response = await fetch(URL);
        const data = await response.json();
        setTrips(data)
    }

    useEffect(() => {
        getTrips();
    }, [])

    console.log('trips: ', trips)

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
        <h2>Most Recent Trip</h2>
        <div className="rivers_return">
            {trips ? loaded() : loading()} 
        </div>
            
        </>
    )
}

export default Index