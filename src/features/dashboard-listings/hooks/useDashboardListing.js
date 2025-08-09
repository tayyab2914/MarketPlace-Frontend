import { useState, useCallback, useEffect } from "react";
import {
  API_LISTING_LIST,
  API_LISTING_UPDATE,
  API_DELETE_LISTING_BY_ID,
} from "@/apis/ListingApis";

const useDashboardListings = (token) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getListings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await API_LISTING_LIST(token);
      setListings(res?.data || []);
      console.log(res)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getListings();
    }
  }, [getListings, token]);

  const updateListing = async (listing_id, values) => {
    try {
      await API_LISTING_UPDATE(token, listing_id, values);
      await getListings();
    } catch (err) {
      setError(err);
    }
  };

  const deleteListing = async (id) => {
    try {
      await API_DELETE_LISTING_BY_ID(token, id);
      await getListings();
    } catch (err) {
      setError(err);
    }
  };

  return {
    listings,
    loading,
    error,
    updateListing,
    deleteListing,
    refreshListings: getListings,
  };
};

export default useDashboardListings;
