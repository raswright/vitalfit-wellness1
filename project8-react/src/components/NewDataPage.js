import React, { useState, useEffect } from 'react';
import '../styles/NewDataPage.css';
import NewDataForm from './NewDataForm';
import request1 from '../assets/images/request1.jpg';
import request2 from '../assets/images/request2.jpg';

const NewDataPage = () => {
  const [serverMessage, setServerMessage] = useState(''); // server message
  const [dataList, setDataList] = useState([]); // manage list of all submitted data
  const [recentSubmission, setRecentSubmission] = useState(null); // manage most recent submission

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://vitalfit-wellness-server.onrender.com/api/class-suggestions');
        const result = await response.json();
        if (response.ok) {
          setDataList(result);
        } else {
          console.error('Failed to fetch data:', result.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('https://vitalfit-wellness-server.onrender.com/api/class-suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
      
        setDataList((prevList) => [...prevList, result.class]); 
        setRecentSubmission(result.class);
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

      {/* Recap Box */}
      {recentSubmission && (
        <div className="recap-box">
          <h3>Your Submission</h3>
          <p><strong>Class Type:</strong> {recentSubmission.classType}</p>
          {recentSubmission.customClassType && (
            <p><strong>Custom Class Type:</strong> {recentSubmission.customClassType}</p>
          )}
          <p><strong>Preferred Day/Time:</strong> {recentSubmission.preferredDayTime}</p>
          <p><strong>Group Type:</strong> {recentSubmission.groupType}</p>
          <p><strong>Instructor Preference:</strong> {recentSubmission.instructorPreference}</p>
          {recentSubmission.comments && (
            <p><strong>Comments:</strong> {recentSubmission.comments}</p>
          )}
        </div>
      )}

      {/* List of Submitted Suggestions */}
      <div className="submitted-suggestions">
        <h3>Submitted Class Suggestions</h3>
        {dataList.length > 0 ? (
          <ul>
            {dataList.map((item) => (
              <li key={item.id}>
                <p><strong>Class Type:</strong> {item.classType}</p>
                {item.customClassType && <p><strong>Custom Class Type:</strong> {item.customClassType}</p>}
                <p><strong>Preferred Day/Time:</strong> {item.preferredDayTime}</p>
                <p><strong>Group Type:</strong> {item.groupType}</p>
                <p><strong>Instructor Preference:</strong> {item.instructorPreference}</p>
                {item.comments && <p><strong>Comments:</strong> {item.comments}</p>}
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No class suggestions submitted yet.</p>
        )}
      </div>

      {/* Decorative Images */}
      <img src={request1} alt="Decorative Left" className="decorative-image left-side" />
      <img src={request2} alt="Decorative Right" className="decorative-image right-side" />
    </div>
  );
};

export default NewDataPage;