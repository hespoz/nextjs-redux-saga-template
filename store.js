import { applyMiddleware, createStore } from "redux"

import reducer from './reducers'
import rootSaga, { sagaMiddleware } from './rootSagas'

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store