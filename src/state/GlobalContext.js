  
import { createContext, useContext, useReducer } from 'react'
import { GlobalInitialState } from './initialState'
import { personReducer, numbersReducer } from './reducers'

const combineReducers = (...reducers) => (state, action) =>
  reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state)

const stateCtx = createContext(GlobalInitialState)
const dispatchCtx = createContext(() => 0)

const CombinedReducer = combineReducers(personReducer, numbersReducer);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CombinedReducer, GlobalInitialState)
  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  )
}

export const useDispatch = () => useContext(dispatchCtx)

export const useGlobalState = () => {
  const state = useContext(stateCtx)
  return state
}