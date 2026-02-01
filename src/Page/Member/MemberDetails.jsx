import "./MemberDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import {
    MdHealthAndSafety,
    MdSearch,
    MdNotifications,
    MdAccountCircle,
    MdEdit,
    MdAdd,
    MdMedication,
    MdSchedule,
    MdCancel,
    MdCalendarMonth,
    MdLightMode,
    MdDarkMode,
    MdSunny,
    MdCheckCircle,
    MdLocationOn,
} from "react-icons/md";

const MemberDetails = () => {
    const navigate = useNavigate();
    const [showShare, setShowShare] = useState(false);

    // temp code (later from backend)
    const inviteCode = "482913";

    return (
        <div className="member-root">
            {/* HEADER */}
            <Header />

            {/* MAIN */}
            <main className="member-main">
                {/* PROFILE HEADER */}
                <section className="profile-card">
                    <div className="profile-info">
                        <div className="avatar-large">RS</div>

                        <div>
                            <div className="name-row">
                                <h1>Rahul Sharma</h1>
                                <span className="tag">Father</span>
                            </div>
                            <p>50 years old</p>
                        </div>
                    </div>

                    <div className="profile-actions">
                        <button className="secondary edit-btn" onClick={() => navigate("/edit-member")}>
                            <MdEdit /> Edit
                        </button>
                        <button
                            className="secondary share-btn"
                            onClick={() => setShowShare(true)}
                        >
                            Share
                        </button>
                    </div>
                </section>

                {/* QUICK SUMMARY */}
                <h2 className="section-title">Quick Summary</h2>

                <div className="summary-grid">
                    <div className="summary-card">
                        <div className="medicine-icon-container" style={{ backgroundColor: "#dcf9fc" }}>
                            <MdMedication className="medicine-icon" style={{ color: "#13daec" }} />
                        </div>
                        <h4>Medicines Today</h4>
                        <p>6 total doses scheduled</p>
                    </div>

                    <div className="summary-card warning">
                        <div className="medicine-icon-container" style={{ backgroundColor: "#faedbb" }}>
                            <MdSchedule className="medicine-icon" style={{ color: "#ca8a04" }} />
                        </div>
                        <h4>Due Now</h4>
                        <p>2 remaining</p>
                    </div>

                    <div className="summary-card danger">
                        <div className="medicine-icon-container" style={{ backgroundColor: "#fbcfcf" }}>
                            <MdCancel className="medicine-icon" style={{ color: "#dc2626" }} />
                        </div>
                        <h4>Missed</h4>
                        <p>0 missed doses</p>
                    </div>

                    <div className="summary-card">
                        <div className="medicine-icon-container" style={{ backgroundColor: "#d8e6fd" }}>
                            <MdCalendarMonth className="medicine-icon" style={{ color: "#2563eb" }} />
                        </div>
                        <h4>Next Appointment</h4>
                        <p>Tomorrow, 10:00 AM</p>
                    </div>
                </div>

                {/* CONTENT GRID */}
                <div className="content-grid">
                    {/* MEDICINES */}
                    <section>
                        <div className="section-header section-header-member-detail">
                            <h3>Medicines Schedule</h3>
                            {/* <button className="link-btn">View All →</button> */}
                        </div>

                        <div className="medicine-card">
                            <div className="medicine-info">
                                <div className="med-image" />
                                <div className="med-content">
                                    <div className="med-top">
                                        <div>
                                            <h4>Lisinopril</h4>
                                            <p className="medicine-detail">10mg Tablet • High Blood Pressure</p>
                                            <p>Refill in: 5 days</p>
                                        </div>
                                    </div>
                                    <div className="med-bottom">
                                        <p className="note">"Take with food, twice daily."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="last-section">
                                <div className="icons">
                                    <MdLightMode />
                                    <MdSunny className="muted" />
                                    <MdDarkMode />
                                </div>
                                <div className="refill-button">
                                    Refill
                                </div>
                                <button className="primary small markastaken-btn">Mark as Taken</button>
                            </div>
                        </div>

                        <div className="medicine-card">
                            <div className="medicine-info">
                                <div className="med-image" />
                                <div className="med-content">
                                    <div className="med-top">
                                        <div>
                                            <h4>Metformin</h4>
                                            <p className="medicine-detail">500mg Capsule • Diabetes Management</p>
                                            <p>This medicine has run out</p>
                                        </div>
                                    </div>
                                    <div className="med-bottom">
                                        <p className="note">"One capsule 3 times a day."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="last-section">
                                <div className="icons">
                                    <MdLightMode />
                                    <MdSunny />
                                    <MdDarkMode />
                                </div>
                                <div className="refill-button">
                                    Refill
                                </div>
                                <div className="taken">
                                    <MdCheckCircle /> Taken at 8:15 AM
                                </div>
                            </div>
                        </div>
                        <div className="medicine-card">
                            <div className="medicine-info">
                                <div className="med-image" />
                                <div className="med-content">
                                    <div className="med-top">
                                        <div>
                                            <h4>Paracetamol</h4>
                                            <p className="medicine-detail">250mg Capsule • Fever</p>
                                            <p>Refill in: 10 days</p>
                                        </div>
                                    </div>
                                    <div className="med-bottom">
                                        <p className="note">"One capsule 3 times a day."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="last-section">
                                <div className="icons">
                                    <MdLightMode />
                                    <MdSunny />
                                    <MdDarkMode />
                                </div>
                                <div className="refill-button">
                                    Refill
                                </div>
                                <div className="taken">
                                    <MdCheckCircle /> Taken at 8:15 AM
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* APPOINTMENTS */}
                    <section>
                        <div className="section-header section-header-member-detail">
                            <h3>Appointments</h3>
                            {/* <button className="link-btn">Schedule</button> */}
                        </div>

                        <div className="appointment-card">
                            <span className="badge">Upcoming</span>
                            <div className="appt-header">
                                <div className="date-box">
                                    <span>OCT</span>
                                    <strong>14</strong>
                                </div>
                                <div>
                                    <h4>Dr. Sarah Jenkins</h4>
                                    <p>Cardiology Specialist</p>
                                </div>
                            </div>

                            <div className="appt-info">
                                <p><MdSchedule /> 10:30 AM - 11:15 AM</p>
                                <p><MdLocationOn /> Central Medical Plaza</p>
                            </div>

                            <div className="map-placeholder">
                                View Map Location
                            </div>
                        </div>

                        <div className="appointment-card muted">
                            <div className="appt-header">
                                <div className="date-box disabled">
                                    <span>SEP</span>
                                    <strong>28</strong>
                                </div>
                                <div>
                                    <h4>Dr. Michael Chen</h4>
                                    <p>Routine Health Checkup</p>
                                </div>
                            </div>

                            <span className="status">Completed</span>
                        </div>
                    </section>
                </div>
            </main>
            {showShare && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Share Access</h2>
                        <p className="modal-subtitle">
                            Share this 6-digit code with a family member to give access.
                        </p>

                        <div className="code-box">
                            {inviteCode}
                        </div>

                        <div className="modal-actions">
                            <button
                                className="secondary"
                                onClick={() => setShowShare(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MemberDetails;