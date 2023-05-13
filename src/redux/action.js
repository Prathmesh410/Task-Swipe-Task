import { ADD_INVOICE, DELETE_INVOICE, EDIT_INVOICE } from "./actiontype"

export const addInvoice = (invoice) => {
    return {
        type: ADD_INVOICE,
        payload: invoice
    }
}

export const editInvoice = (invoice) => {
    return {
        type: EDIT_INVOICE,
        payload: invoice
    }
}

export const deleteInvoice = (invoice) => {
    return {
        type:DELETE_INVOICE,
        payload: invoice
    }
}