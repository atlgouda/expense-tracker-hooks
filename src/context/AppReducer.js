// How we specify the application state changes in response to certain actions to our context

export default (state, action) => {
    // type is like an id Ex. delete transaction, add transaction
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            // Return all but transaction with id selected for deletion
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        // default return as is
        default:
            return state;
    }
}