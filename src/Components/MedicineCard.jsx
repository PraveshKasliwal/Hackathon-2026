import "../Page/AddMember/AddMember.css";
import { MdDelete } from "react-icons/md";

const MedicineCard = ({ onDelete }) => {
  return (
    <div className="card">
      <div className="form-row">
        <input placeholder="Medicine Name" />
        <input placeholder="Dosage" />
        <input placeholder="Duration" />
      </div>

      <div className="time-row">
        <span>Time:</span>
        <button>Morning</button>
        <button>Noon</button>
        <button>Evening</button>
        <button>Bedtime</button>
      </div>

      <button className="delete" onClick={onDelete}>
        <MdDelete color="red" style={{height: "24px", width: "24px"}} />
      </button>
    </div>
  );
}

export default MedicineCard;