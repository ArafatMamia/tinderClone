import { IconButton } from "@mui/material";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <div className="header__logo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/408/408790.png"
          alt="logo"
          className="header__img"
        />
        <h3>Tinder</h3>
      </div>

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
