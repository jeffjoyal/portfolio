import React, { useState, useEffect } from 'react'
// used for the functions u want
import axios from 'axios'


function Experience() {
  const [inputs, setInputs] = useState([]);
  const [newInput, setNewInput] = useState('');

  useEffect(() => {
    // Fetch inputs when component mounts
    fetchInputs();
  }, []);

  const fetchInputs = async () => {
    try {
      const response = await axios.get('/get-inputs');
      setInputs(response.data);
    } catch (error) {
      console.error('Error fetching inputs:', error);
    }
  };

  const handleAddInput = async () => {
    try {
      const response = await axios.post('/add-input', { input_value: newInput });
      if (response.status === 200) {
        // Input added successfully, fetch inputs again to update the list
        fetchInputs();
        setNewInput(''); // Clear the input field
      } else {
        console.error('Failed to add input');
      }
    } catch (error) {
      console.error('Error adding input:', error);
    }
  };

  return (
    <div>
      <h1>Inputs</h1>
      <ul>
        {inputs.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newInput}
        onChange={(e) => setNewInput(e.target.value)}
      />
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  )

  

}

export default Experience