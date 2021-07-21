import { Redirect, Route, Switch } from "react-router-dom"
import { NavBar } from "../component/NavBar"
import { EditionScreen } from "../Screens/EditionScreen"
import { HomeScreen } from "../Screens/HomeScreen"


export const navRouter = () => {
    

    return (
        <>
            <NavBar/>
        <div > 
            <Switch>
                <Route exact component={HomeScreen} path="/home"/>
                <Route exact component={EditionScreen} path="/edition"/>
                
                <Redirect to="/home" />
            </Switch>
        </div>
        </>
    )
}
