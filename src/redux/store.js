import { createStore } from 'redux'
import { Reducer } from './invoiceReducer'

const store= createStore(Reducer);
export default store;