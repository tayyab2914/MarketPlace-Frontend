import { API_TEST_ADMIN_TOKEN, API_TEST_USER_TOKEN } from "@/apis/AccountApis";
import { useLogoutUser } from "@/hooks/useLogoutUser";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

const VerifyToken = () => {
  const { is_admin, token } = useSelector((state) => state.auth);
  const { logoutUser } = useLogoutUser();

  const verifyToken = useCallback(async () => {
    if (!token) return;

    let res;
    if (is_admin) {
      res = await API_TEST_ADMIN_TOKEN(token);
      if (!res) logoutUser();
    } else {
      res = await API_TEST_USER_TOKEN(token);
      if (!res) logoutUser();
    }
  }, [token, is_admin, logoutUser]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);
  return null;
};

export default VerifyToken;
