import { useSelector } from "react-redux";

import ContactNav from "../Navigation/ContactNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import authSelectors from "../../redux/auth/auth-selector";
export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <ContactNav />
      {isLoggedIn ? <UserMenu /> : <Navigation />}
    </div>
  );
}
