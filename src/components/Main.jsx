import {useState, useEffect, useRef} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Index from '../pages/Index'
import Flies from '../pages/Flies'
import Rivers from '../pages/Rivers'

function Main(props) {
    return (
        <main>
            <Switch>

                <Route exact path="/">
                    <Index/>
                </Route>

                <Route exact path="/flies">
                    <Flies/>
                </Route>

                <Route path="/rivers">
                    <Rivers/>
                </Route>


            </Switch>
        </main>
    )

}

export default Main