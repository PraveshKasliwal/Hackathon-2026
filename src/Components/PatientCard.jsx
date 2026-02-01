import "./cstyles.css";
import { useNavigate } from "react-router-dom";

const PatientCard = ({
  name,
  initials,
  relation,
  status,
  statusClass,
  today,
  due,
  missed,
  appointment,
}) => {
  const navigate = useNavigate();
  return (
    <div className="patient-card" onClick={() => navigate("member-detail")}>
      <div className="card-header">
        <div className="patient-info">
          <div className="avatar">{initials}</div>

          <div className="info">
            <h3>{name}</h3>
            <span className="relation">{relation}</span>
          </div>
        </div>

        <div className="status-container">
          <div>Status</div>
          <span className={`status ${statusClass}`}>{status}</span>
        </div>
      </div>

      <div className="stats">
        <div>
          <span>Today</span>
          <strong>{today}</strong>
        </div>
        <div>
          <span>Due</span>
          <strong className="yellow">{due}</strong>
        </div>
        <div>
          <span>Missed</span>
          <strong className="red">{missed}</strong>
        </div>
      </div>

      <div className="appointment">
        <span>Next Appointment</span>
        <p>{appointment}</p>
      </div>
    </div>
  );
}

export default PatientCard;