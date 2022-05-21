import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../public/styles/Rivers.scss'

function Rivers() {

    const URL = 'http://localhost:4000/api/rivers';
    const [rivers, setRivers] = useState(null);  

    async function getRivers() {
        const response = await fetch(URL);
        const data = await response.json();
        setRivers(data)
    }

    useEffect(() => {
        getRivers();
    }, [])

    const loaded = () => {
        return rivers.map((river) => (
            <div key={river.river_id} className="rivers">
                <h3>{river.river_name}</h3>
                <Link to={`/flies`} className="link-element"><p>LINK</p></Link>
            </div>
        ));
    }
    const loading =() => {
        return <h1>Loading...</h1>
    }

    return (
        <>
        <h1 className='rivers_h1'>Rivers</h1>
            <div className="rivers_box">
             <div className="rivers_return">
                {rivers ? loaded() : loading()} 
            </div>
            </div>
        </>
    )
}

export default Rivers;