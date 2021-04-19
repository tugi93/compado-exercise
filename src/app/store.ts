import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import logger from 'redux-logger'

import reducer from './services/reducer'

const middlewares = applyMiddleware(promise, logger)
const store = createStore(reducer, middlewares)

export default store