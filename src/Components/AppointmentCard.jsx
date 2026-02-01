import "../Page/AddMember/AddMember.css"

const AppointmentCard = ({ onDelete }) => {
    return (
        <div className="card">
            <div className="form-row">
                <input placeholder="Doctor Name" />
                <input type="datetime-local" />
            </div>
            <input placeholder="Clinic Address" />

            <button className="delete" onClick={onDelete}>
                Delete Appointment
            </button>
        </div>
    );
}

export default AppointmentCard;