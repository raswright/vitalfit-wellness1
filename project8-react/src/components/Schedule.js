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
import pilates4 from '../assets/images/pilates4.jpg';
import pilates5 from '../assets/images/pilates5.jpg';
import running1 from '../assets/images/running1.jpg';
import running2 from '../assets/images/running2.jpg';
import running3 from '../assets/images/running3.jpg';
import running4 from '../assets/images/running4.jpg';
import running5 from '../assets/images/running5.jpg';
import cycling1 from '../assets/images/cycling1.jpg';
import cycling2 from '../assets/images/cycling2.jpg';
import cycling3 from '../assets/images/cycling3.jpg';
import cycling4 from '../assets/images/cycling4.jpg';
import cycling5 from '../assets/images/cycling5.jpg';
import cycling6 from '../assets/images/cycling6.jpg';
import zumba1 from '../assets/images/zumba1.jpg';
import zumba2 from '../assets/images/zumba2.jpg';
import zumba3 from '../assets/images/zumba3.jpg';
import zumba4 from '../assets/images/zumba4.jpg';
import bodypump1 from '../assets/images/bodypump1.jpg';
import bodypump2 from '../assets/images/bodypump2.jpg';
import bodypump3 from '../assets/images/bodypump3.jpg';
import bodypump4 from '../assets/images/bodypump4.jpg';
import bodypump5 from '../assets/images/bodypump5.jpg';
import bodypump6 from '../assets/images/bodypump6.jpg';

const imageMap = {
  yoga1,
  yoga2,
  yoga3,
  yoga4,
  yoga5,
  pilates1,
  pilates2,
  pilates3,
  pilates4,
  pilates5,
  running1,
  running2,
  running3, 
  running4,
  running5,
  cycling1,
  cycling2,
  cycling3,
  cycling4,
  cycling5,
  cycling6,
  zumba1,
  zumba2,
  zumba3,
  zumba4,
  bodypump1,
  bodypump2,
  bodypump3,
  bodypump4,
  bodypump5,
  bodypump6,
};

const Schedule = () => {
  const [jsonData, setJsonData] = useState({});
  const [previewStates, setPreviewStates] = useState({});

  useEffect(() => {
    fetch("https://vitalfit-wellness-server.onrender.com/api/classes")
      .then((response) => response.json())
      .then((data) => {
        const dataObj = {};
        data.forEach((item) => {
          if (!dataObj[item.class_name]) dataObj[item.class_name] = [];
          dataObj[item.class_name].push(item);
        });
        setJsonData(dataObj);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const togglePreview = (className, index) => {
    setPreviewStates((prev) => ({
      ...prev,
      [`${className}-${index}`]: !prev[`${className}-${index}`],
    }));
  };

  
  return (
    <main>
      {/* Yoga Class Section */}
      <ClassSection
        title="Yoga"
        className="yoga"
        scheduleData={[
          { class: "Yoga", day: "Monday", time: "8:00 AM - 9:00 AM", instructor: "Coco Rodriguez" },
          { class: "Yoga", day: "Tuesday", time: "12:00 PM - 1:00 PM", instructor: "Andrew Gomez" },
          { class: "Yoga", day: "Wednesday", time: "6:00 PM - 7:00 PM", instructor: "Amy Jones" },
          { class: "Yoga", day: "Friday", time: "11:00 AM - 12:00 PM", instructor: "Andrew Gomez" },
          { class: "Yoga", day: "Friday", time: "5:00 PM - 6:00 PM", instructor: "Andrew Gomez" },
          { class: "Yoga", day: "Saturday", time: "9:30 AM - 10:30 AM", instructor: "Aaliyah Collins", isBooked: true },
        ]}
        jsonData={jsonData["Yoga"] || [
          {
            class_name: "Yoga",
            confirmation_number: "Y123456",
            instructor_level: "Intermediate",
            availability: "19/20 slots available",
            location: "Room A",
            status: "Open",
            img_name: "yoga1",
            extra_info: ["Wear comfortable clothes", "Bring your own mat", "Bring a water bottle"]
          },
          {
            class_name: "Yoga",
            confirmation_number: "Y234561",
            instructor_level: "Advanced",
            availability: "10/15 slots available",
            location: "Room A",
            status: "Open",
            img_name: "yoga2",
            extra_info: ["Wear comfortable clothes", "Bring your own mat", "Bring a water bottle"]
          },
          {
            class_name: "Yoga",
            confirmation_number: "Y345612",
            instructor_level: "Beginner",
            availability: "22/25 slots available",
            location: "Room A",
            status: "Open",
            img_name: "yoga3",
            extra_info: ["Wear comfortable clothes", "Bring your own mat", "Bring a water bottle"]
          },
          {
            class_name: "Yoga",
            confirmation_number: "Y456123",
            instructor_level: "Beginner",
            availability: "18/25 slots available",
            location: "Room A",
            status: "Open",
            img_name: "yoga4",
            extra_info: ["Wear comfortable clothes", "Bring your own mat", "Bring a water bottle"]
          },
          {
            class_name: "Yoga",
            confirmation_number: "Y561234",
            instructor_level: "Intermediate",
            availability: "11/20 slots available",
            location: "Room A",
            status: "Open",
            img_name: "yoga5",
            extra_info: ["Wear comfortable clothes", "Bring your own mat", "Bring a water bottle"]
          },
        ]}
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
        jsonData={jsonData["Pilates"] || [
          {
            class_name: "Pilates",
            confirmation_number: "P654321",
            instructor_level: "Beginner",
            availability: "18/25 slots available",
            location: "Room B",
            status: "Open",
            img_name: "pilates1",
            extra_info: ["Focus on core strength", "No equipment needed", "Bring a hand towel"]
          },
          {
            class_name: "Pilates",
            confirmation_number: "P543216",
            instructor_level: "Intermediate",
            availability: "14/20 slots available",
            location: "Room B",
            status: "Open",
            img_name: "pilates2",
            extra_info: ["Focus on core strength", "No equipment needed", "Bring a hand towel"]
          },
          {
            class_name: "Pilates",
            confirmation_number: "P432165",
            instructor_level: "Advanced",
            availability: "12/15 slots available",
            location: "Room B",
            status: "Open",
            img_name: "pilates3",
            extra_info: ["Focus on core strength", "No equipment needed", "Bring a hand towel"]
          },
          {
            class_name: "Pilates",
            confirmation_number: "P321654",
            instructor_level: "Advanced",
            availability: "14/15 slots available",
            location: "Room B",
            status: "Open",
            img_name: "pilates4",
            extra_info: ["Focus on core strength", "No equipment needed", "Bring a hand towel"]
          },
          {
            class_name: "Pilates",
            confirmation_number: "216543",
            instructor_level: "Beginner",
            availability: "23/25 slots available",
            location: "Room B",
            status: "Open",
            img_name: "pilates5",
            extra_info: ["Focus on core strength", "No equipment needed", "Bring a hand towel"]
          }
      ]}     
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
        jsonData={jsonData["Running"] || [
          {
            class_name: "Running",
            confirmation_number: "R234561",
            instructor_level: "Intermediate",
            availability: "15/20 slots available",
            location: "Room C",
            status: "Open",
            img_name: "running1",
            extra_info: ["Outdoor activity", "Running shoes required", "Feel free to bring headphones/airpods"]
          },
          {
            class_name: "Running",
            confirmation_number: "R345612",
            instructor_level: "Beginner",
            availability: "22/25 slots available",
            location: "Room C",
            status: "Open",
            img_name: "running2",
            extra_info: ["Outdoor activity", "Running shoes required", "Feel free to bring headphones/airpods"]
          },
          {
            class_name: "Running",
            confirmation_number: "R456123",
            instructor_level: "Advanced",
            availability: "13/15 slots available",
            location: "Room C",
            status: "Open",
            img_name: "running3",
            extra_info: ["Outdoor activity", "Running shoes required", "Feel free to bring headphones/airpods"]
          },
          {
            class_name: "Running",
            confirmation_number: "R561234",
            instructor_level: "Intermediate",
            availability: "12/25 slots available",
            location: "Room C",
            status: "Open",
            img_name: "running4",
            extra_info: ["Outdoor activity", "Running shoes required", "Feel free to bring headphones/airpods"]
          },
          {
            class_name: "Running",
            confirmation_number: "R612345",
            instructor_level: "Beginner",
            availability: "17/25 slots available",
            location: "Room C",
            status: "Open",
            img_name: "running5",
            extra_info: ["Outdoor activity", "Running shoes required", "Feel free to bring headphones/airpods"]
          }
        ]}
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
        jsonData={jsonData["Cycling"] || [
          {
            class_name: "Cycling",
            confirmation_number: "C654321",
            instructor_level: "Intermediate",
            availability: "14/20 slots available",
            location: "Room D",
            status: "Open",
            img_name: "cycling1",
            extra_info: ["Indoor cycling", "Water bottle recommended", "Bring gloves"]
          },
          {
            class_name: "Cycling",
            confirmation_number: "C543216",
            instructor_level: "Beginner",
            availability: "14/25 slots available",
            location: "Room D",
            status: "Open",
            img_name: "cycling2",
            extra_info: ["Indoor cycling", "Water bottle recommended", "Bring gloves"]
          },
          {
            class_name: "Cycling",
            confirmation_number: "C432165",
            instructor_level: "Advanced",
            availability: "11/15 slots available",
            location: "Room D",
            status: "Open",
            img_name: "cycling3",
            extra_info: ["Indoor cycling", "Water bottle recommended", "Bring gloves"]
          },
          {
            class_name: "Cycling",
            confirmation_number: "C321654",
            instructor_level: "Intermediate",
            availability: "18/20 slots available",
            location: "Room D",
            status: "Open",
            img_name: "cycling4",
            extra_info: ["Indoor cycling", "Water bottle recommended", "Bring gloves"]
          },
          {
            class_name: "Cycling",
            confirmation_number: "C216543",
            instructor_level: "Beginner",
            availability: "17/25 slots available",
            location: "Room D",
            status: "Open",
            img_name: "cycling5",
            extra_info: ["Indoor cycling", "Water bottle recommended", "Bring gloves"]
          },
          {
            class_name: "Cycling",
            confirmation_number: "C165432",
            instructor_level: "Advanced",
            availability: "12/15 slots available",
            location: "Room D",
            status: "Open",
            img_name: "cycling6",
            extra_info: ["Indoor cycling", "Water bottle recommended", "Bring gloves"]
          }
        ]}
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
        jsonData={jsonData["Zumba"] || [
          {
            class_name: "Zumba",
            confirmation_number: "Z123456",
            instructor_level: "Intermediate",
            availability: "14/15 slots available",
            location: "Room E",
            status: "Open",
            img_name: "zumba1",
            extra_info: ["Dance-based workout", "Fun atmosphere", "Bring a hand towel"]
          },
          {
            class_name: "Zumba",
            confirmation_number: "Z234561",
            instructor_level: "Intermediate",
            availability: "13/15 slots available",
            location: "Room E",
            status: "Open",
            img_name: "zumba2",
            extra_info: ["Dance-based workout", "Fun atmosphere", "Bring a hand towel"]
          },
          {
            class_name: "Zumba",
            confirmation_number: "Z561234",
            instructor_level: "Advanced",
            availability: "6/15 slots available",
            location: "Room E",
            status: "Open",
            img_name: "zumba3",
            extra_info: ["Dance-based workout", "Fun atmosphere", "Bring a hand towel"]
          },
          {
            class_name: "Zumba",
            confirmation_number: "Z612345",
            instructor_level: "Advanced",
            availability: "10/15 slots available",
            location: "Room E",
            status: "Open",
            img_name: "zumba4",
            extra_info: ["Dance-based workout", "Fun atmosphere", "Bring a hand towel"]
          }
        ]}
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
        jsonData={jsonData["bodypump"] || [
          {
            class_name: "Body Pump",
            confirmation_number: "BP654321",
            instructor_level: "Advanced",
            availability: "11/15 slots available",
            location: "Room F",
            status: "Open",
            img_name: "bodypump1",
            extra_info: ["Weights included", "Strength-based", "Bring a water bottle"]
          },
          {
            class_name: "Body Pump",
            confirmation_number: "BP543216",
            instructor_level: "Intermediate",
            availability: "18/20 slots available",
            location: "Room F",
            status: "Open",
            img_name: "bodypump2",
            extra_info: ["Weights included", "Strength-based", "Bring a water bottle"]
          },
          {
            class_name: "Body Pump",
            confirmation_number: "BP432165",
            instructor_level: "Beginner",
            availability: "20/25 slots available",
            location: "Room F",
            status: "Open",
            img_name: "bodypump3",
            extra_info: ["Weights included", "Strength-based", "Bring a water bottle"]
          },
          {
            class_name: "Body Pump",
            confirmation_number: "BP321654",
            instructor_level: "Advanced",
            availability: "14/15 slots available",
            location: "Room F",
            status: "Open",
            img_name: "bodypump4",
            extra_info: ["Weights included", "Strength-based", "Bring a water bottle"]
          },
          {
            class_name: "Body Pump",
            confirmation_number: "BP216543",
            instructor_level: "Intermediate",
            availability: "15/20 slots available",
            location: "Room F",
            status: "Open",
            img_name: "bodypump5",
            extra_info: ["Weights included", "Strength-based", "Bring a water bottle"]
          },
          {
            class_name: "Body Pump",
            confirmation_number: "BP165432",
            instructor_level: "Beginner",
            availability: "7/15 slots available",
            location: "Room F",
            status: "Open",
            img_name: "bodypump6",
            extra_info: ["Weights included", "Strength-based", "Bring a water bottle"]
          }
        ]}
        previewStates={previewStates}
        togglePreview={togglePreview}
        imageMap={imageMap}
      />


    </main>
  );
};

const ClassSection = ({
  title,
  className,
  scheduleData,
  jsonData = [],
  previewStates,
  togglePreview,
  imageMap,
}) => {
  const [bookedStates, setBookedStates] = useState(
    scheduleData.reduce((acc, item, index) => ({ ...acc, [index]: item.isBooked || false }), {})
  );

  const toggleBooking = (index) => {
    setBookedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
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
                      {previewStates[`${className}-${index}`] ? "Unpreview" : "Preview"}
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className={`book-btn ${bookedStates[index] ? "booked" : ""}`}
                    onClick={() => toggleBooking(index)}
                  >
                    {bookedStates[index] ? "Booked" : "Book Now"}
                  </button>
                </td>
              </tr>
              {/* Render preview details */}
              {!item.isBooked && previewStates[`${className}-${index}`] && jsonData[index] && (
                <tr className="class-details">
                  <td colSpan="6">
                    <div>
                      <h3>{jsonData[index].class_name}</h3>
                      <p>Confirmation Number: {jsonData[index].confirmation_number}</p>
                      <p>Instructor Level: {jsonData[index].instructor_level}</p>
                      <p>Availability: {jsonData[index].availability}</p>
                      <p>Location: {jsonData[index].location}</p>
                      <p>Extra Info: {jsonData[index].extra_info.join(", ")}</p>
                      <img
                        src={imageMap[jsonData[index].img_name]}
                        alt={jsonData[index].class_name}
                        style={{ width: "150px", height: "auto" }}
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
};


export default Schedule;