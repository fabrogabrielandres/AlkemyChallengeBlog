import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import { crudReducers } from '../reducers/crudReducers';
import { loginReducers } from '../reducers/loginReducers';


const reducer = combineReducers({
    loginReducers,
    crudReducers
        
})


const initialState = {
    
}



const composeEnhancers = composeWithDevTools({});

export const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));