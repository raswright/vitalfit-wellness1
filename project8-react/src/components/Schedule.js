import React, { useState, useEffect } from 'react';
import '../styles/Schedule.css';

// Import images directly
import yoga1 from '../assets/images/yoga1.jpg';
import yoga2 from '../assets/images/yoga2.jpg';
import yoga3 from '../assets/images/yoga3.jpg';
import yoga4 from '../assets/images/yoga4.jpg';
import yoga5 from '../assets/images/yoga5.jpg';
import pilates1 from '../assets/images/pilates1.jpg';
import pilates2 from '../assets/images/pilates2.jpg';
import pilates3 from '../assets/images/pilates3.jpg';

const imageMap = {
  yoga1,
  yoga2,
  yoga3,
  yoga4,
  yoga5,
  pilates1,
  pilates2,
  pilates3,
};

const Schedule = () => {
  const [jsonData, setJsonData] = useState({});
  const [previewStates, setPreviewStates] = useState({});

  useEffect(() => {
    // Fetch JSON data from the server
    fetch('https://vitalfit-wellness-server.onrender.com/api/classes')
      .then((response) => response.json())
      .then((data) => {
        // Convert array to object with class names as keys for quick lookup
        const dataObj = {};
        data.forEach((item) => {
          if (!dataObj[item.class_name]) dataObj[item.class_name] = [];
          dataObj[item.class_name].push(item);
        });
        setJsonData(dataObj);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const togglePreview = (className, index) => {
    setPreviewStates((prev) => ({
      ...prev,
      [`${className}-${index}`]: !prev[`${className}-${index}`],
    }));
  };

  return (
    <div>
      <main>
        {/* Yoga Class Section */}
        <ClassSection
          title="Yoga"
          className="yoga"
          scheduleData={[
            { class: "Yoga", day: "Monday", time: "8:00 AM - 9:00 AM", instructor: "Coco Rodriguez" },
            { class: "Yoga", day: "Tuesday", time: "12:00 PM - 1:00 PM", instructor: "Andrew Gomez" },
            { class: "Yoga", day: "Wednesday", time: "6:00 PM - 7:00 PM", instructor: "Amy Jones" },
            { class: "Yoga", day: "Friday", time: "11:00 AM - 12:00 PM", instructor: "Maya Wright" },
            { class: "Yoga", day: "Friday", time: "5:00 PM - 6:00 PM", instructor: "John Smith" },
            { class: "Yoga", day: "Saturday", time: "9:30 AM - 10:30 AM", instructor: "Aaliyah Collins", isBooked: true },
          ]}
          jsonData={jsonData["Yoga"]}
          previewStates={previewStates}
          togglePreview={togglePreview}
          imageMap={imageMap}
        />

        {/* Pilates Class Section */}
        <ClassSection
          title="Pilates"
          className="pilates"
          scheduleData={[
            { class: "Pilates", day: "Monday", time: "7:00 AM - 8:30 AM", instructor: "Mason Carter" },
            { class: "Pilates", day: "Monday", time: "9:00 AM - 10:30 AM", instructor: "Jordan Parker" },
            { class: "Pilates", day: "Tuesday", time: "10:00 AM - 11:30 AM", instructor: "Austin Lang" },
            { class: "Pilates", day: "Thursday", time: "2:00 PM - 3:30 PM", instructor: "Sarah Bell" },
            { class: "Pilates", day: "Friday", time: "2:30 PM - 4:00 PM", instructor: "Elena Roberts", isBooked: true },
            { class: "Pilates", day: "Saturday", time: "4:00 PM - 5:30 PM", instructor: "Julian Hughes" },
          ]}
          jsonData={jsonData["Pilates"]}
          previewStates={previewStates}
          togglePreview={togglePreview}
          imageMap={imageMap}
        />

        {/* Running Class Section */}
        <ClassSection
          title="Running"
          className="running"
          scheduleData={[
            { class: "Running", day: "Monday", time: "8:30 AM - 10:30 PM", instructor: "Dwayne Hill & Courtney Miller", isBooked: true },
            { class: "Running", day: "Tuesday", time: "5:00 PM - 7:00 PM", instructor: "Jaden Adams" },
            { class: "Running", day: "Tuesday", time: "1:00 PM - 3:00 PM", instructor: "Ashley Banks" },
            { class: "Running", day: "Wednesday", time: "10:00 AM - 12:00 PM", instructor: "Cheyenne Wilson & Mike Sims" },
            { class: "Running", day: "Thursday", time: "5:00 AM - 7:00 AM", instructor: "Chris Evans" },
            { class: "Running", day: "Friday", time: "2:00 PM - 4:00 PM", instructor: "Jackie Price & Maverick Hall" },
          ]}
          jsonData={jsonData["Running"]}
          previewStates={previewStates}
          togglePreview={togglePreview}
          imageMap={imageMap}
        />

        {/* Cycling Class Section */}
        <ClassSection
          title="Cycling"
          className="cycling"
          scheduleData={[
            { class: "Cycling", day: "Monday", time: "10:30 AM - 11:30 AM", instructor: "Payton Lee" },
            { class: "Cycling", day: "Tuesday", time: "11:00 AM - 12:00 PM", instructor: "Nia Jackson" },
            { class: "Cycling", day: "Wednesday", time: "5:00 PM - 6:00 PM", instructor: "Jaden Adams" },
            { class: "Cycling", day: "Thursday", time: "3:00 PM - 4:00 PM", instructor: "Luke Cooper" },
            { class: "Cycling", day: "Saturday", time: "6:00 AM - 7:00 AM", instructor: "Scarlett Diaz" },
            { class: "Cycling", day: "Saturday", time: "4:00 PM - 5:00 PM", instructor: "Ethan Ross" },
          ]}
          jsonData={jsonData["Cycling"]}
          previewStates={previewStates}
          togglePreview={togglePreview}
          imageMap={imageMap}
        />

        {/* Zumba Class Section */}
        <ClassSection
          title="Zumba"
          className="zumba"
          scheduleData={[
            { class: "Zumba", day: "Tuesday", time: "3:00 PM - 4:30 PM", instructor: "James Davis" },
            { class: "Zumba", day: "Wednesday", time: "11:30 AM - 1:00 PM", instructor: "Matthew Rogers & Ciara Green" },
            { class: "Zumba", day: "Thursday", time: "1:00 PM - 2:30 PM", instructor: "Gabriel Bennett", isBooked: true },
            { class: "Zumba", day: "Thursday", time: "8:30 AM - 10:00 AM", instructor: "Jada Gray", isBooked: true },
            { class: "Zumba", day: "Friday", time: "12:00 PM - 1:30 PM", instructor: "Katy Diggs & Trevor Harris" },
            { class: "Zumba", day: "Monday", time: "4:30 PM - 6:00 PM", instructor: "Amelia Brooks" },
          ]}
          jsonData={jsonData["Zumba"]}
          previewStates={previewStates}
          togglePreview={togglePreview}
          imageMap={imageMap}
        />

        {/* Body Pump Class Section */}
        <ClassSection
          title="Body Pump"
          className="bodypump"
          scheduleData={[
            { class: "Body Pump", day: "Monday", time: "5:00 PM - 6:00 PM", instructor: "Joshua Scott" },
            { class: "Body Pump", day: "Tuesday", time: "3:00 PM - 4:00 PM", instructor: "Kayla Miller" },
            { class: "Body Pump", day: "Tuesday", time: "9:00 AM - 10:00 AM", instructor: "Viola Johnson" },
            { class: "Body Pump", day: "Thursday", time: "12:00 PM - 1:00 PM", instructor: "Jamal Sanders" },
            { class: "Body Pump", day: "Friday", time: "11:00 AM - 12:00 PM", instructor: "Issac Lawrence" },
            { class: "Body Pump", day: "Saturday", time: "5:00 PM - 6:00 PM", instructor: "Audrey Campbell" },
          ]}
          jsonData={jsonData["Body Pump"]}
          previewStates={previewStates}
          togglePreview={togglePreview}
          imageMap={imageMap}
        />
      </main>
    </div>
  );
};

const ClassSection = ({ title, className, scheduleData, jsonData = [], previewStates, togglePreview }) => (
  <section className={`class-section ${className}`}>
    <h2>{title}</h2>
    <table className="booking-table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Day</th>
          <th>Time</th>
          <th>Instructor(s)</th>
          <th>Preview</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {scheduleData.map((item, index) => (
          <React.Fragment key={`${className}-${index}`}>
            <tr>
              <td>{item.class}</td>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.instructor}</td>
              <td>
                {item.isBooked ? (
                  <span className="booked">Booked</span>
                ) : (
                  <button
                    className="preview-btn"
                    onClick={() => togglePreview(className, index)}
                  >
                    {previewStates[`${className}-${index}`] ? 'Unpreview' : 'Preview'}
                  </button>
                )}
              </td>
              <td>
                {item.isBooked ? (
                  <span className="booked">Booked</span>
                ) : (
                  <button className="book-btn">Book Now</button>
                )}
              </td>
            </tr>
            {previewStates[`${className}-${index}`] && jsonData[index] && (
              <tr className="class-details">
                <td colSpan="6">
                  <div>
                    <h3>{jsonData[index].class_name}</h3>
                    <p>Confirmation Number: {jsonData[index].confirmation_number}</p>
                    <p>Instructor Level: {jsonData[index].instructor_level}</p>
                    <p>Availability: {jsonData[index].availability}</p>
                    <p>Location: {jsonData[index].location}</p>
                    <p>Extra Info: {jsonData[index].extra_info.join(', ')}</p>
                    <img
                      src={`images/${jsonData[index].img_name}`}
                      alt={jsonData[index].class_name}
                      style={{ width: '150px', height: 'auto' }}
                    />
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </section>
);

export default Schedule;