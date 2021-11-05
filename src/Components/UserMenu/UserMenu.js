import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import authSelector from "../../redux/auth/auth-selector";
import authOperations from "../../redux/auth/auth-operations";
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUserName);
  return (
    <div>
      <h1>Hi, {name}! </h1>
      <button type="button" onClick={() => dispatch(authOperations.Exit())}>
        Exit
      </button>
    </div>
  );
}
