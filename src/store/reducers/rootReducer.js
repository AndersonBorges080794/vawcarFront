import { combineReducers } from 'redux';
import loadingReducer from './loading.reducer.js';
import notifyReducer from './notify.reducer.js'
import alertReducer from './alert.reducer.js'
import authReducer from './auth.reducer.js'
import registerReducer from './register.reducer.js'
import vehiclesReducer from './vehicles.reducer.js'



const rootReducer = combineReducers({
    loadingReducer,
    notifyReducer,
    alertReducer,
    authReducer,
    registerReducer,
    vehiclesReducer,
    
})

export default rootReducer;
