import { useState } from 'react';

const TransactionForm = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');

  const addTransaction = () => {
    setTransactions([...transactions, { id: Date.now(), amount }]);
    setAmount('');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((txn) => txn.id !== id));
  };

  return (
    <div>
      <h2>Transaction CRUD</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addTransaction}>Add Transaction</button>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.id}>
            ${txn.amount} <button onClick={() => deleteTransaction(txn.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionForm;
