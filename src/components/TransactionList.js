import React, {useContext} from "react";
// Bringing in Transactions in state
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)

  return (
    <>
      <h3>History</h3>
      <ul className="list">
          {/* for each transaction we want to put out a list item. transaction passed as prop in <Transaction>. 
          needs unique key since it will be a list*/}
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  );
};
