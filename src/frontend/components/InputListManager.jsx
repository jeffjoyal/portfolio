import React, { useState } from 'react';
import axios from 'axios';

const InputListManager = () => {
  const [newInput, setNewInput] = useState('');
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddInput = async () => {
    console.log("your a big bit")
    try {
      console.log("your a bit")
      const response = await axios.post('/add-input', { input_value: newInput });
      if (response.status === 200) {
        console.log('Input added successfully');
        setNewInput(''); // Clear input field
      }
    } catch (error) {
      console.error('Error adding input:', error);
    }
  };

  const handleGetList = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/get-inputs');
      if (response.status === 200) {
        setList(response.data);
      }
    } catch (error) {
      console.error('Error fetching list:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Add Input</h2>
      <input
        type="text"
        value={newInput}
        onChange={(e) => setNewInput(e.target.value)}
      />
      <button onClick={handleAddInput}>Add Input</button>

      <h2>Get List</h2>
      <button onClick={handleGetList} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get List'}
      </button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputListManager;
