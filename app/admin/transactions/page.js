'use client';

import React, { useState, useEffect } from 'react';

const TransactionsPage = () => {

  const initialTransactions = JSON.parse(localStorage.getItem('transactions')) || [
    { id: 1, description: 'Transaction 1', amount: 100 },
    { id: 2, description: 'Transaction 2', amount: 200 },
  ];
  const [transactions, setTransactions] = useState(initialTransactions);
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: '' });
  const [editTransaction, setEditTransaction] = useState(null);
  const [editedTransaction, setEditedTransaction] = useState({ description: '', amount: '' });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = () => {
    if (newTransaction.description && newTransaction.amount) {
      const newTransactionObj = {
        id: Date.now(),
        description: newTransaction.description,
        amount: parseFloat(newTransaction.amount),
      };
      setTransactions([...transactions, newTransactionObj]);
      setNewTransaction({ description: '', amount: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const handleEditTransaction = (transaction) => {
    setEditTransaction(transaction);
    setEditedTransaction({ description: transaction.description, amount: transaction.amount });
  };

  const handleSaveEdit = () => {
    if (editedTransaction.description && editedTransaction.amount) {
      setTransactions(
        transactions.map((transaction) =>
          transaction.id === editTransaction.id ? editedTransaction : transaction
        )
      );
      setEditTransaction(null);
      setEditedTransaction({ description: '', amount: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-12 bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Transactions</h1>

        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
            placeholder="Transaction description"
            value={newTransaction.description}
            onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
          />
          <input
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
            placeholder="Amount"
            value={newTransaction.amount}
            onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
          />
          <button
            onClick={handleAddTransaction}
            className="w-full py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Add Transaction
          </button>
        </div>

        <ul className="space-y-4">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <li key={transaction.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                {editTransaction && editTransaction.id === transaction.id ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-40 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={editedTransaction.description}
                      onChange={(e) => setEditedTransaction({ ...editedTransaction, description: e.target.value })}
                    />
                    <input
                      type="number"
                      className="w-40 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={editedTransaction.amount}
                      onChange={(e) => setEditedTransaction({ ...editedTransaction, amount: e.target.value })}
                    />
                    <button
                      onClick={handleSaveEdit}
                      className="ml-2 py-1 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <span className="text-lg font-medium text-gray-700">
                    {transaction.description} - ${transaction.amount}
                  </span>
                )}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditTransaction(transaction)}
                    className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTransaction(transaction.id)}
                    className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No transactions found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TransactionsPage;
