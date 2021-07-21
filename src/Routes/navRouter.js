import { Redirect, Route, Switch } from "react-router-dom"
import { NavBar } from "../component/NavBar"
import { EditionScreen } from "../Screens/EditionScreen"
import { HomeScreen } from "../Screens/HomeScreen"


export const navRouter = () => {


    return (
        <>
            <NavBar />
            <div className="m-4">
                <Switch>
                    <Route  component={HomeScreen} path="/home" />
                    <Route  component={EditionScreen} path="/edition" />
                    <Redirect to="/home" />                   
                </Switch>
            </div>
        </>
    )
}
