import { Routes, Route } from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard";
import AddMember from "./Page/AddMember/AddMember";
import Onboarding from "./Page/Onboarding/Onboarding";
import MemberDetails from "./Page/Member/MemberDetails";
import EditMember from "./Page/EditMember/EditMember";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/member-detail" element={<MemberDetails />} />
      <Route path="/edit-member" element={<EditMember />} />
      <Route path="/add-member">
        <Route path="choice" element={<Onboarding />} />
        <Route path="manual" element={<AddMember />} />
      </Route>
      {/* <Route path="/patient/:id" element={<PatientDetails />} /> */}
    </Routes>
  );
}

export default App;