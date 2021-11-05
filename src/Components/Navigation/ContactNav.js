import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selector";
const ContactNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <div> {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</div>
    </div>
  );
};

export default ContactNav;
