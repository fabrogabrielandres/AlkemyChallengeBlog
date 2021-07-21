import { Route } from "react-router-dom"
import { HomeScreen } from "../Screens/HomeScreen"


export const navRouter = () => {

    
    return (
        <div className="m-4">
            
            <Route   component={HomeScreen} path="/home"/>             
        </div>
    )
}
