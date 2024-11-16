import React, { useState } from 'react';
import '../styles/NewDataPage.css';
import NewDataForm from './NewDataForm';
import request1 from '../assets/images/request1.jpg';
import request2 from '../assets/images/request2.jpg';

const NewDataPage = () => {
  const [serverMessage, setServerMessage] = useState(''); // server message
  const [dataList, setDataList] = useState([]); // manage the list of submitted data

  // function to handle the form submission
  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('https://vitalfit-wellness-server.onrender.com/api/classes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setDataList((prevList) => [...prevList, formData]);
        setServerMessage('Class suggestion submitted successfully!');
        return { success: true };
      } else {
        setServerMessage(result.message || 'Failed to submit. Try again.');
        return { success: false };
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setServerMessage('An error occurred. Please try again.');
      return { success: false };
    }
  };  

  return (
    <div className="new-data-page">
      <h2>Suggest a New Class</h2>
      <NewDataForm onSubmit={handleFormSubmit} />
      {serverMessage && <p className="server-message">{serverMessage}</p>}

      {/* Decorative Images */}
      <img src={request1} alt="Decorative Left" className="decorative-image left-side" />
      <img src={request2} alt="Decorative Right" className="decorative-image right-side" />
    </div>
  );
};

export default NewDataPage;