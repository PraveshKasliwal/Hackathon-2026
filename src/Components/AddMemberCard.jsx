import "./cstyles.css";
import { useNavigate } from "react-router-dom";

const AddMemberCard = () => {
  const navigate = useNavigate();
  return (
    <div className="add-member-card">
      <div className="icon">👤➕</div>
      <h3>Add Family Member</h3>
      <p>Manage health records and reminders for another patient</p>
      <button onClick={() => navigate("/add-member/choice")}>Get Started</button>
    </div>
  );
}

export default AddMemberCard;