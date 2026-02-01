import { useState } from "react";
import "./Onboarding.css";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";

const Onboarding = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="onboarding-root">
      {/* HEADER */}
      <header className="onboarding-header">
        <div className="logo">
          <span className="material-symbols-outlined icon">
            medical_services
          </span>
          <h2>MediCare Reminder</h2>
        </div>

        <div className="header-actions">
          <a href="#">Help</a>
          <a href="#">Support</a>
          <button className="logout-btn">Log Out</button>
        </div>
      </header>

      {/* MAIN */}
      <main className="onboarding-main">
        <div className="heading">
          <h1>How would you like to get started?</h1>
          <p>
            Manage your family's health schedules with ease. Choose an option to
            begin your journey with MediCare Reminder.
          </p>
        </div>

        <div className="options">
          {/* JOIN USING CODE */}
          <div className="option-card">
            <div className="icon-circle light">
              <MdKey size={40} />
            </div>

            <h3>Join Using Code</h3>
            <p>
              Import existing schedules from another family member using a
              secure, one-time invite code.
            </p>

            <button
              className="secondary-btn"
              onClick={() => setShowModal(true)}
            >
              Enter Code
            </button>
          </div>

          {/* ADD MEMBER MANUALLY */}
          <div className="option-card highlighted">
            <span className="badge">Recommended</span>

            <div className="icon-circle dark">
              <FaUserPlus size={38} />
            </div>

            <h3>Add Member Manually</h3>
            <p>
              Create a brand new profile from scratch for yourself or a loved
              one to start fresh.
            </p>

            <button
              className="primary-btn"
              onClick={() => navigate("/add-member/manual")}
            >
              Add Member
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="onboarding-footer">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <p>© 2024 MediCare Reminder. All rights reserved.</p>
      </footer>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <div className="modal-icon">
                <MdGroupAdd size={36} />
              </div>
              <h2>Join Your Family</h2>
              <p>
                Enter the 6-digit invite code shared by your family member.
              </p>
            </div>

            <div className="modal-body">
              <label>Family Code</label>
              <input
                type="text"
                placeholder="123456"
                maxLength={6}
              />
            </div>

            <div className="modal-actions">
              <button className="primary-btn" onClick={() => navigate("/")}>Join Family</button>
              <button
                className="secondary-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
