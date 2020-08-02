import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dashboardReducer from './dashboardReducer'

export default combineReducers({ profileReducer: profileReducer });
