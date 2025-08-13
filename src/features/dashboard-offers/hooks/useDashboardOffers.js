import { useState, useCallback, useEffect } from "react";

import { API_GET_OFFERS } from "@/apis/OfferApis";

const useDashboardOffers = (token) => {
  const [Offers, setOffers] = useState([]);

  const getOffers = useCallback(async () => {
    const res = await API_GET_OFFERS(token);
    setOffers(res?.data || []);
    console.log(res);
  }, [token]);

  useEffect(() => {
    if (token) {
      getOffers();
    }
  }, [getOffers, token]);

  return {
    Offers,
  };
};

export default useDashboardOffers;
