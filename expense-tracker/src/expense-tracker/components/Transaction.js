import React, { useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
    // if the transaction amount is less then 0, set the class to minus (red color), else set the class to plus (green) ? is IF : is ELSE!! 
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}> 
            {transaction.text} <span>{sign}{transaction.amount}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
