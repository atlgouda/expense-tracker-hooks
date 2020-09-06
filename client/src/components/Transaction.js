import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

// "transaction" passed as props from TransactionList.  need to catch here
export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    // add sign based on amount value
    const sign = transaction.amount < 0 ? '-':'+';

    return (
        // Math.abs is userd to drop negative sign after "$"
        // Assign class name based on if amount is positive or negative
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
         {transaction.text}<span>{sign} ${Math.abs(transaction.amount)}</span>
          <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
