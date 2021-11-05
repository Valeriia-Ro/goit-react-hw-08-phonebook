import { useEffect, lazy, Suspense } from "react";
import { Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import PrivateRoute from "./Components/PrivateRouter";
import PublicRoute from "./Components/PublicRouter";
import AppBar from "./Components/AppBar/AppBar";
import authOperations from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selector";

const EnterView = lazy(() => import("./view/EnterView"));
const RegisterView = lazy(() => import("./view/RegisterView"));
const ContactsView = lazy(() => import("./view/ContactsView"));

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return !isFetching ? (
    <div>
      <AppBar />

      <Suspense
        fallback={
          <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
        }
      >
        <Routes>
          <PublicRoute exact path="/register" redirectTo="/contacts" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <EnterView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Routes>
      </Suspense>
    </div>
  ) : null;
}
