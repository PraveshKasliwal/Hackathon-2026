import { useState } from "react";
import "../Page/AddMember/AddMember.css";

const MedicineCard = ({ onDelete }) => {
  const [times, setTimes] = useState([]);

  const toggleTime = (time) => {
    if (times.includes(time)) {
      setTimes(times.filter(t => t !== time));
    } else {
      setTimes([...times, time]);
    }
  };

  return (
    <div className="card">
      <div className="form-row">
        <input placeholder="Medicine Name" />
        <input placeholder="Dosage" />
        <input placeholder="Duration" />
      </div>

      {/* TIME SELECTION */}
      <div className="time-row">
        {["Morning", "Afternoon", "Night"].map((time) => (
          <button
            key={time}
            className={`time-btn ${times.includes(time) ? "active" : ""}`}
            onClick={() => toggleTime(time)}
          >
            {time}
          </button>
        ))}
      </div>

      <button className="delete" onClick={onDelete}>
        Delete Medicine
      </button>
    </div>
  );
};

export default MedicineCard;