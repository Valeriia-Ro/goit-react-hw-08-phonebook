import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selector";

export default function PublicRoute({
  restricted = false,
  redirectTo = "/",
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Navigate to={redirectTo} /> : children}
    </Route>
  );
}
