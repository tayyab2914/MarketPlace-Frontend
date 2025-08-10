import {
  setIsUserLoggedIn,
  setUserAuthToken,
} from "@/redux/actions/authActions";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export const useLogoutUser = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = () => {
    dispatch(setIsUserLoggedIn(false));
    dispatch(setUserAuthToken(null));
    router.push(ROUTES.home);
  };

  return { logoutUser };
};

