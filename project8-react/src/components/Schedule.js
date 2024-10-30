// src/components/SchedulePage.js
import React from 'react';
import '../styles/Schedule.css'; // Ensure to create and use a CSS file for styles

const Schedule = () => {
  return (
    <div>
      <main>
        {/* Yoga Class Section */}
        <Section
          className="yoga"
          title="Yoga"
          scheduleData={[
            { class: "Yoga", day: "Monday", time: "8:00 AM - 9:00 AM", instructor: "Coco Rodriguez", isBooked: false },
            { class: "Yoga", day: "Tuesday", time: "12:00 PM - 1:00 PM", instructor: "Andrew Gomez", isBooked: false },
            { class: "Yoga", day: "Wednesday", time: "6:00 PM - 7:00 PM", instructor: "Amy Jones", isBooked: false },
            { class: "Yoga", day: "Friday", time: "11:00 AM - 12:00 PM", instructor: "Maya Wright", isBooked: false },
            { class: "Yoga", day: "Friday", time: "5:00 PM - 6:00 PM", instructor: "John Smith", isBooked: false },
            { class: "Yoga", day: "Saturday", time: "9:30 AM - 10:30 AM", instructor: "Aaliyah Collins", isBooked: true },
          ]}
        />

        {/* Pilates Class Section */}
        <Section
          className="pilates"
          title="Pilates"
          scheduleData={[
            { class: "Pilates", day: "Monday", time: "7:00 AM - 8:30 AM", instructor: "Mason Carter", isBooked: false },
            { class: "Pilates", day: "Monday", time: "9:00 AM - 10:30 AM", instructor: "Jordan Parker", isBooked: false },
            { class: "Pilates", day: "Tuesday", time: "10:00 AM - 11:30 AM", instructor: "Austin Lang", isBooked: false },
            { class: "Pilates", day: "Thursday", time: "2:00 PM - 3:30 PM", instructor: "Sarah Bell", isBooked: false },
            { class: "Pilates", day: "Friday", time: "2:30 PM - 4:00 PM", instructor: "Elena Roberts", isBooked: true },
            { class: "Pilates", day: "Saturday", time: "4:00 PM - 5:30 PM", instructor: "Julian Hughes", isBooked: false },
          ]}
        />

        {/* Running Class Section */}
        <Section
          className="running"
          title="Running"
          scheduleData={[
            { class: "Running", day: "Monday", time: "8:30 AM - 10:30 PM", instructor: "Dwayne Hill & Courtney Miller", isBooked: true },
            { class: "Running", day: "Tuesday", time: "5:00 PM - 7:00 PM", instructor: "Jaden Adams", isBooked: false },
            { class: "Running", day: "Tuesday", time: "1:00 PM - 3:00 PM", instructor: "Ashley Banks", isBooked: false },
            { class: "Running", day: "Wednesday", time: "10:00 AM - 12:00 PM", instructor: "Cheyenne Wilson & Mike Sims", isBooked: false },
            { class: "Running", day: "Thursday", time: "5:00 AM - 7:00 AM", instructor: "Chris Evans", isBooked: false },
            { class: "Running", day: "Friday", time: "2:00 PM - 4:00 PM", instructor: "Jackie Price & Maverick Hall", isBooked: false },
          ]}
        />

        {/* Cycling Class Section */}
        <Section
          className="cycling"
          title="Cycling"
          scheduleData={[
            { class: "Cycling", day: "Monday", time: "10:30 AM - 11:30 AM", instructor: "Payton Lee", isBooked: false },
            { class: "Cycling", day: "Tuesday", time: "11:00 AM - 12:00 PM", instructor: "Nia Jackson", isBooked: false },
            { class: "Cycling", day: "Wednesday", time: "5:00 PM - 6:00 PM", instructor: "Jaden Adams", isBooked: false },
            { class: "Cycling", day: "Thursday", time: "3:00 PM - 4:00 PM", instructor: "Luke Cooper", isBooked: false },
            { class: "Cycling", day: "Saturday", time: "6:00 AM - 7:00 AM", instructor: "Scarlett Diaz", isBooked: false },
            { class: "Cycling", day: "Saturday", time: "4:00 PM - 5:00 PM", instructor: "Ethan Ross", isBooked: false },
          ]}
        />

        {/* Zumba Class Section */}
        <Section
          className="zumba"
          title="Zumba"
          scheduleData={[
            { class: "Zumba", day: "Tuesday", time: "3:00 PM - 4:30 PM", instructor: "James Davis", isBooked: false },
            { class: "Zumba", day: "Wednesday", time: "11:30 AM - 1:00 PM", instructor: "Matthew Rogers & Ciara Green", isBooked: false },
            { class: "Zumba", day: "Thursday", time: "1:00 PM - 2:30 PM", instructor: "Gabriel Bennett", isBooked: true },
            { class: "Zumba", day: "Thursday", time: "8:30 AM - 10:00 AM", instructor: "Jada Gray", isBooked: true },
            { class: "Zumba", day: "Friday", time: "12:00 PM - 1:30 PM", instructor: "Katy Diggs & Trevor Harris", isBooked: false },
            { class: "Zumba", day: "Monday", time: "4:30 PM - 6:00 PM", instructor: "Amelia Brooks", isBooked: false },
          ]}
        />

        {/* Body Pump Class Section */}
        <Section
          className="bodypump"
          title="Body Pump"
          scheduleData={[
            { class: "Body Pump", day: "Monday", time: "5:00 PM - 6:00 PM", instructor: "Joshua Scott", isBooked: false },
            { class: "Body Pump", day: "Tuesday", time: "3:00 PM - 4:00 PM", instructor: "Kayla Miller", isBooked: false },
            { class: "Body Pump", day: "Tuesday", time: "9:00 AM - 10:00 AM", instructor: "Viola Johnson", isBooked: false },
            { class: "Body Pump", day: "Thursday", time: "12:00 PM - 1:00 PM", instructor: "Jamal Sanders", isBooked: false },
            { class: "Body Pump", day: "Friday", time: "11:00 AM - 12:00 PM", instructor: "Issac Lawerence", isBooked: false },
            { class: "Body Pump", day: "Saturday", time: "5:00 PM - 6:00 PM", instructor: "Audrey Campbell", isBooked: false },
          ]}
        />
      </main>
    </div>
  );
};

const Section = ({ className, title, scheduleData }) => {
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
            <tr key={index}>
              <td>{item.class}</td>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.instructor}</td>
              <td>
                {item.isBooked ? (
                  <span className="booked">Booked</span>
                ) : (
                  <button className="preview-btn">Preview</button>
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
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Schedule;