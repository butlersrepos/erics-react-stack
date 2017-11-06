import { LOADING, DONE_LOADING } from '../actions'

const initialState = {
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: true }
    case DONE_LOADING:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
