import React, { useEffect, useState } from "react";
import "./styles/listing-page.css";
import { useSelector } from "react-redux";
import { API_LISTING_LIST } from "@/apis/ListingApis";
import ListingContent from "./components/ListingContent";

const ListingsPage = () => {
  const { token } = useSelector((state) => state.auth);
  const [Listings, setListings] = useState([]);

  const getListings = async () => {
    const res = await API_LISTING_LIST(token);
    console.log(res);
    setListings(res?.data);
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div>
      <ListingContent Listings={Listings} />
    </div>
  );
};

export default ListingsPage;
