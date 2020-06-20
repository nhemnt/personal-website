import { createStore as reduxCreateStore } from 'redux'
import colors from '../constants/colors'

const reducer = (state, action) => {
  if (action.type === `UPDATE_THEME`) {
    return Object.assign({}, state, {
      theme: action.payload,
    })
  }
  return state
}

const initialState = { theme: colors['LIGHT_BLUE'] }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
