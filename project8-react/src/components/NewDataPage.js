import React, { useState, useEffect } from 'react';
import '../styles/NewDataPage.css';
import NewDataForm from './NewDataForm';
import request1 from '../assets/images/request1.jpg';
import request2 from '../assets/images/request2.jpg';

const NewDataPage = () => {
  const [serverMessage, setServerMessage] = useState('');
  const [dataList, setDataList] = useState([]);
  const [recentSubmission, setRecentSubmission] = useState(null);
  const [editItemId, setEditItemId] = useState(null); // Track the ID of the item being edited

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
          // Update the item in the list
          setDataList((prevList) =>
            prevList.map((item) => (item.id === editItemId ? { ...item, ...formData } : item))
          );
          setServerMessage('Class suggestion updated successfully!');
        } else {
          // Add the new item to the list
          setDataList((prevList) => [...prevList, result.suggestion]);
          setRecentSubmission(result.suggestion);
          setServerMessage('Class suggestion submitted successfully!');
        }

        setEditItemId(null); // Clear edit state
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

  // Handle Edit Click
  const handleEdit = (item) => {
    setEditItemId(item.id);
    setRecentSubmission(item); // Show the item being edited in the form
  };

  return (
    <div className="new-data-page">
      <h2>{editItemId ? 'Edit Your Class Suggestion' : 'Suggest a New Class'}</h2>
      <NewDataForm
        onSubmit={handleFormSubmit}
        initialData={editItemId ? recentSubmission : null}
      />
      {serverMessage && <p className="server-message">{serverMessage}</p>}

      {/* List of Submitted Suggestions */}
      <div className="submitted-suggestions">
        <h3>Submitted Class Suggestions</h3>
        {dataList.length > 0 ? (
          <div className="suggestions-grid">
            {dataList.map((item) => (
              <div key={item.id} className="suggestion-card">
                <p><strong>Class Type:</strong> {item.classType}</p>
                {item.customClassType && <p><strong>Custom Class Type:</strong> {item.customClassType}</p>}
                <p><strong>Preferred Day/Time:</strong> {item.preferredDayTime}</p>
                <p><strong>Group Type:</strong> {item.groupType}</p>
                <p><strong>Instructor Preference:</strong> {item.instructorPreference}</p>
                {item.comments && <p><strong>Comments:</strong> {item.comments}</p>}
                <div className="action-buttons">
                  <button className="edit-button" onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(item.id)}>
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