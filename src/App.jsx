import React from 'react';
import { useState } from 'react';
import Table from './components/Table';
import './styles/main.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Table></Table>
  )
}

export default App;
