import React, { useState, useEffect } from 'react';
import '../styles/NewDataPage.css';
import NewDataForm from './NewDataForm';
import request1 from '../assets/images/request1.jpg';
import request2 from '../assets/images/request2.jpg';

const NewDataPage = () => {
  const [serverMessage, setServerMessage] = useState('');
  const [dataList, setDataList] = useState([]);
  const [recentSubmission, setRecentSubmission] = useState(null);
  const [editItemId, setEditItemId] = useState(null);

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

  // Handle form submission (Add or Edit)
  const handleFormSubmit = async (formData) => {
    try {
      let response;
      if (editItemId) {
        // Edit existing suggestion
        response = await fetch(
          `https://vitalfit-wellness-server.onrender.com/api/class-suggestions/${editItemId}`,
          {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          }
        );
      } else {
        // Add new suggestion
        response = await fetch('https://vitalfit-wellness-server.onrender.com/api/class-suggestions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      const result = await response.json();

      if (response.ok) {
        if (editItemId) {
          setDataList((prevList) =>
            prevList.map((item) => (item.id === editItemId ? { ...item, ...formData } : item))
          );
          setServerMessage('Class suggestion updated successfully!');
        } else {
          setDataList((prevList) => [...prevList, result.suggestion]);
          setRecentSubmission(result.suggestion);
          setServerMessage('Class suggestion submitted successfully!');
        }

        setEditItemId(null);
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

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://vitalfit-wellness-server.onrender.com/api/class-suggestions/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setDataList((prevList) => prevList.filter((item) => item.id !== id));
        setServerMessage('Class suggestion deleted successfully!');
      } else {
        const result = await response.json();
        setServerMessage(result.message || 'Failed to delete. Try again.');
      }
    } catch (error) {
      console.error('Error deleting suggestion:', error);
      setServerMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="new-data-page">
      <h2>Suggest a New Class</h2>
      <NewDataForm
        onSubmit={handleFormSubmit}
        initialData={editItemId ? dataList.find((item) => item.id === editItemId) : null}
      />
      {serverMessage && <p className="server-message">{serverMessage}</p>}

      {/* Recap Box */}
      {recentSubmission && (
        <div className="recap-box">
          <h3 className="recap-title" style={{ color: 'blue' }}>Your Submission</h3>
          <div className="recap-content">
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
        </div>
      )}

      {/* List of Submitted Suggestions */}
      <div className="submitted-suggestions">
        <h3 className="suggestions-title" style={{ color: 'green' }}>Submitted Class Suggestions</h3>
        {dataList.length > 0 ? (
          <div className="suggestions-grid">
            {dataList.map((item) => (
              <div key={item.id} className="suggestion-card">
                <div className="suggestion-content">
                  <p><strong>Class Type:</strong> {item.classType}</p>
                  {item.customClassType && <p><strong>Custom Class Type:</strong> {item.customClassType}</p>}
                  <p><strong>Preferred Day/Time:</strong> {item.preferredDayTime}</p>
                  <p><strong>Group Type:</strong> {item.groupType}</p>
                  <p><strong>Instructor Preference:</strong> {item.instructorPreference}</p>
                  {item.comments && <p><strong>Comments:</strong> {item.comments}</p>}
                </div>
                <div className="action-buttons">
                  <button
                    className="edit-button"
                    onClick={() => setEditItemId(item.id)}
                    style={{ marginRight: '10px', backgroundColor: 'orange' }}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(item.id)}
                    style={{ backgroundColor: 'red', color: 'white' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
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