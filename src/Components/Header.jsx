import "./cstyles.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        🏥 <span>MediCare Reminder</span>
      </div>

      <button className="add-btn">+ Add</button>
    </header>
  );
}

export default Header;