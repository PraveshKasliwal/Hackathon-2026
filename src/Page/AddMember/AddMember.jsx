import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MedicineCard from "../../Components/MedicineCard";
import AppointmentCard from "../../Components/AppointmentCard";
import "./AddMember.css";

const AddMember = () => {
  const navigate = useNavigate();

  const [medicines, setMedicines] = useState([
    { id: Date.now() }
  ]);

  const [appointments, setAppointments] = useState([
    { id: Date.now() }
  ]);

  const [prescriptions, setPrescriptions] = useState([
    { id: Date.now() }
  ]);

  // Medicines
  const addMedicine = () => {
    setMedicines([...medicines, { id: Date.now() }]);
  };

  const removeMedicine = (id) => {
    setMedicines(medicines.filter(m => m.id !== id));
  };

  // Appointments
  const addAppointment = () => {
    setAppointments([...appointments, { id: Date.now() }]);
  };

  const removeAppointment = (id) => {
    setAppointments(appointments.filter(a => a.id !== id));
  };

  // Prescriptions (GLOBAL)
  const addPrescription = () => {
    setPrescriptions([...prescriptions, { id: Date.now() }]);
  };

  const removePrescription = (id) => {
    setPrescriptions(prescriptions.filter(p => p.id !== id));
  };

  return (
    <main className="add-member">
      <h1>Add New Member</h1>
      <p className="subtitle">
        Fill in the details below to add a family member.
      </p>

      {/* MEMBER DETAILS */}
      <section className="card">
        <h2>Member Details</h2>

        <div className="form-row">
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
        </div>

        <div className="relationship-input-container">
          <input placeholder="Relationship" />
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
            <p className="empty-text">No appointments added yet</p>
          </div>
        )}
        {medicines.map((med) => (
          <MedicineCard
            key={med.id}
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
            <p className="empty-text">No appointments added yet</p>
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
            <p className="empty-text">No appointments added yet</p>
          </div>
        )}

        {appointments.map((appt) => (
          <AppointmentCard
            key={appt.id}
            onDelete={() => removeAppointment(appt.id)}
          />
        ))}
      </section>

      {/* ACTIONS */}
      <div className="actions">
        <button className="save" onClick={() => navigate("/")}>Cancel</button>
        <button className="save">Save Member</button>
      </div>
    </main>
  );
}

export default AddMember;