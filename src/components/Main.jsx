import {useState, useEffect, useRef} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Index from '../pages/Index'

function Main(props) {

    const URL = 'http://localhost:4000/api/river'
    const [rivers, setRivers] = useState(null)  

    // const getRiversRef = useRef();

    async function getRivers() {
        const response = await fetch(URL);
        const data = await response.json();
        setRivers(data)
    }

    useEffect(() => {
        getRivers();
    }, [])

    return (
        <main>
            <Switch>

                <Route exact path="/">
                    <Index rivers={rivers}/>
                </Route>


            </Switch>
        </main>
    )

}

export default Main