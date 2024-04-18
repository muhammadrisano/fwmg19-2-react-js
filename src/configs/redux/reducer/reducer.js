import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import skillReducer from "./skillReducer";
import userReducer from "./userReducer";
import workersReducer from "./workerReducer";

const rootReducer = combineReducers({
  main: mainReducer,
  user: userReducer,
  skill: skillReducer,
  worker: workersReducer
})

export default rootReducer