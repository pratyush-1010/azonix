import {
    applyMiddleware,
    compose,
    legacy_createStore as createOwenStore} from 'redux'
import thunk from 'redux-thunk'

import RootRed from './Reducers/RootRed'

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ ||compose
const store=createOwenStore(
    RootRed,
    composeEnhancer(applyMiddleware(thunk))
);
export default store