import "./cstyles.css";
import { Avatar } from "@mantine/core";
import logoImg from "../assets/appLogo.jpeg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="app-header">
      <div className="logo" onClick={() => navigate("/")}>
        <div className="logo-container">
          <img src={logoImg} alt="" />
        </div>
        <span>Mera Care</span>
      </div>
      <div>
        <Avatar onClick={() => navigate("/login")}/>
      </div>
    </header>
  );
}

export default Header;