import { createStore } from 'redux'
import reducers from './reducers'
import { isLoading } from './selectors'

const store = createStore(reducers)
console.log(isLoading(store.getState()))

export default store
