import { createStore, combineReducers } from 'redux'
import results from './reducers/results'
import currentItem from './reducers/currentItem'
import suggestions from './reducers/suggestions'

const reducer = combineReducers({
    results,
    currentItem,
    suggestions
})

const store = createStore(reducer)

export default store
