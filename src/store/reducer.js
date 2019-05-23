import {combineReducers} from "redux"
import {reducer as homeReducer} from '../containers/Home/store'

const reducer = combineReducers({
  home: homeReducer
})

export default reducer
