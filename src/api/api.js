import axios from 'axios';

const BASE = 'http://localhost:8080/api';

export const getTransactions = () => axios.get(`${BASE}/transactions`);
export const addTransaction  = (t)  => axios.post(`${BASE}/transactions`, t);
export const deleteTransaction = (id) => axios.delete(`${BASE}/transactions/${id}`);
export const getSummary      = () => axios.get(`${BASE}/summary`);
export const getByCategory   = () => axios.get(`${BASE}/summary/categories`);