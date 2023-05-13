import { createStore } from 'redux'
import { Reducer } from './invoiceSlice/invoiceReducer'

const store= createStore(Reducer);
export default store;