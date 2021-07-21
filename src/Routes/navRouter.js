import { Route } from "react-router-dom"
import { NavBar } from "../component/NavBar"
import { EditionScreen } from "../Screens/EditionScreen"
import { HomeScreen } from "../Screens/HomeScreen"

export const navRouter = () => {

    
    return (
        <div >
            <NavBar/>
            <Route   component={EditionScreen} path="/edition"/>           
            <Route   component={HomeScreen} path="/home"/>  
        </div>
    )
}
