import AddMemberCard from "../../Components/AddMemberCard";
import Header from "../../Components/Header";
import PatientCard from "../../Components/PatientCard";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Header />

      <main className="dashboard">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Manage family healthcare reminders and appointments</p>
        </div>

        <div className="cards-grid">
          <PatientCard
            name="Rahul Sharma"
            initials="RS"
            relation="Father"
            status="Needs Attention"
            statusClass="warning"
            today={6}
            due={2}
            missed={0}
            appointment="Cardiology - Dr. Aris • Oct 12, 10:30 AM"
          />

          <PatientCard
            name="Neelam"
            initials="MS"
            relation="Mother"
            status="On Track"
            statusClass="success"
            today={4}
            due={0}
            missed={0}
            appointment="General Checkup • Oct 15, 09:00 AM"
          />

          <PatientCard
            name="Shreyas"
            initials="JW"
            relation="Brother"
            status="Alert Required"
            statusClass="danger"
            today={8}
            due={3}
            missed={2}
            appointment="Physical Therapy • Oct 10, 02:00 PM"
          />

          <AddMemberCard />
        </div>
      </main>
    </>
  );
}

export default Dashboard;