import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import appReducer from './reducers/app'
import userReducer from './reducers/user'

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
