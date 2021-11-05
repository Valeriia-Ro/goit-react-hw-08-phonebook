import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router";
import authSelectors from "../redux/auth/auth-selector";

export default function PrivateRoute({
  component: Component,
  redirectTo = "/",
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to={redirectTo} />}
    </Route>
  );
}
