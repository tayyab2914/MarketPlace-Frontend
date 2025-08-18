import { useState, useCallback, useEffect } from "react";
import {
  API_DELETE_USER_SERVICE,
  API_GET_USER_SERVICES,
  API_UPDATE_USER_SERVICE,
} from "@/apis/ServiceApis";

const useDashboardServices = (token) => {
  const [Services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getServices = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await API_GET_USER_SERVICES(token);
      setServices(res?.data || []);
      console.log(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getServices();
    }
  }, [getServices, token]);

  const updateService = async (service_id, values) => {
    try {
      await API_UPDATE_USER_SERVICE(token, service_id, values);
      await getServices();
    } catch (err) {
      setError(err);
    }
  };

  const deleteService = async (service_id) => {
    try {
      await API_DELETE_USER_SERVICE(token, service_id);
      await getServices();
    } catch (err) {
      setError(err);
    }
  };

  return {
    Services,
    loading,
    error,
    updateService,
    deleteService,
    refreshServices: getServices,
  };
};

export default useDashboardServices;
