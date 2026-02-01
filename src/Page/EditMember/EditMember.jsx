import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MedicineCard from "../../Components/MedicineCard";
import AppointmentCard from "../../Components/AppointmentCard";
import "../AddMember/AddMember.css";

const EditMember = () => {
  const navigate = useNavigate();

  /* ------------------ PREFILLED MEMBER DATA ------------------ */
  const [member, setMember] = useState({
    firstName: "John",
    lastName: "Doe",
    relationship: "Father",
  });

  const [medicines, setMedicines] = useState([
    { id: 1, name: "Lisinopril", dosage: "10mg", duration: "30 days" },
    { id: 2, name: "Metformin", dosage: "500mg", duration: "Ongoing" },
  ]);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Jenkins",
      dateTime: "2024-10-14T10:30",
      address: "Central Medical Plaza",
    },
  ]);

  const [prescriptions, setPrescriptions] = useState([
    { id: 1 },
    { id: 2 },
  ]);

  /* ------------------ MEDICINES ------------------ */
  const addMedicine = () => {
    setMedicines([...medicines, { id: Date.now() }]);
  };

  const removeMedicine = (id) => {
    setMedicines(medicines.filter((m) => m.id !== id));
  };

  /* ------------------ APPOINTMENTS ------------------ */
  const addAppointment = () => {
    setAppointments([...appointments, { id: Date.now() }]);
  };

  const removeAppointment = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  /* ------------------ PRESCRIPTIONS ------------------ */
  const addPrescription = () => {
    setPrescriptions([...prescriptions, { id: Date.now() }]);
  };

  const removePrescription = (id) => {
    setPrescriptions(prescriptions.filter((p) => p.id !== id));
  };

  /* ------------------ SAVE ------------------ */
  const handleUpdate = () => {
    const payload = {
      member,
      medicines,
      appointments,
      prescriptions,
    };

    console.log("Updated Member Data:", payload);
    navigate("/"); // later → member details page
  };

  return (
    <main className="add-member">
      <h1>Edit Member</h1>
      <p className="subtitle">
        Update details, medicines, appointments, and prescriptions.
      </p>

      {/* MEMBER DETAILS */}
      <section className="card">
        <h2>Member Details</h2>

        <div className="form-row">
          <input
            placeholder="First Name"
            value={member.firstName}
            onChange={(e) =>
              setMember({ ...member, firstName: e.target.value })
            }
          />
          <input
            placeholder="Last Name"
            value={member.lastName}
            onChange={(e) =>
              setMember({ ...member, lastName: e.target.value })
            }
          />
        </div>

        <div className="relationship-input-container">
          <input
            placeholder="Relationship"
            value={member.relationship}
            onChange={(e) =>
              setMember({ ...member, relationship: e.target.value })
            }
          />
        </div>
      </section>

      {/* MEDICINES */}
      <section className="section-header-container">
        <div className="section-header">
          <h2>Medicines</h2>
          <button onClick={addMedicine}>+ Add Medicine</button>
        </div>

        {medicines.length === 0 && (
          <div className="card">
            <p className="empty-text">No medicines added</p>
          </div>
        )}

        {medicines.map((med) => (
          <MedicineCard
            key={med.id}
            data={med}
            onDelete={() => removeMedicine(med.id)}
          />
        ))}
      </section>

      {/* PRESCRIPTIONS (GLOBAL) */}
      <section className="section-header-container">
        <div className="section-header">
          <h2>Prescriptions</h2>
          <button onClick={addPrescription}>+ Add Prescription</button>
        </div>

        <div className="card">
          {prescriptions.length === 0 && (
            <p className="empty-text">No prescriptions uploaded</p>
          )}

          {prescriptions.map((p) => (
            <div key={p.id} className="prescription-row">
              <input type="file" className="prescription-input" />
              <button
                className="delete"
                onClick={() => removePrescription(p.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* APPOINTMENTS */}
      <section className="section-header-container">
        <div className="section-header">
          <h2>Appointments</h2>
          <button onClick={addAppointment}>+ Add Appointment</button>
        </div>

        {appointments.length === 0 && (
          <div className="card">
            <p className="empty-text">No appointments added</p>
          </div>
        )}

        {appointments.map((appt) => (
          <AppointmentCard
            key={appt.id}
            data={appt}
            onDelete={() => removeAppointment(appt.id)}
          />
        ))}
      </section>

      {/* ACTIONS */}
      <div className="actions">
        <button className="cancel" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button className="save" onClick={handleUpdate}>
          Update Member
        </button>
      </div>
    </main>
  );
};

export default EditMember;