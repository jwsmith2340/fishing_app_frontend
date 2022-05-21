import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Index() {

    const URL = 'http://localhost:4000/api/fly_box';

    const [flies, setFlies] = useState(null);

    async function getFlies() {
        const response = await fetch(URL);
        const data = await response.json();
        setFlies(data)
    }

    useEffect(() => {
        getFlies();
    }, [])

    const loaded = () => {
        return flies.map((fly) => (
            <div key={fly.fly_id} className="flies">
                <h1>{fly.fly_name}</h1>
                <Link to={`/flies`} className="link-element"><p>LINK</p></Link>
            </div>
        ));
    }
    const loading =() => {
        return <h1>Loading...</h1>
    }

    return (
        <>
        
        <div className="flies_return">
            {flies ? loaded() : loading()} 
        </div>
            
        </>
    )
}

export default Index