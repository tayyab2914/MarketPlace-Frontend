"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { API_GET_OFFER_BY_LISTING_ID } from "@/apis/OfferApis";
import { useSelector } from "react-redux";
import "./styles/dashboard-listing-offers-view.css";
import DLOVCard from "./components/DLOVCard";

const DashboardListingOffersPage = () => {
  const params = useParams();
  const listing_id = params?.listing_id;
  const { token } = useSelector((state) => state.auth);

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    if (!listing_id) return;

    const fetchOffers = async () => {
      const res = await API_GET_OFFER_BY_LISTING_ID(token, listing_id);
      setOffers(res?.data || []);
    };

    fetchOffers();
  }, [listing_id, token]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Offers for Listing ID: {listing_id}
      </h2>
      {offers.length === 0 ? (
        <p>No offers found.</p>
      ) : (
        offers.map((offer) => <DLOVCard key={offer.id} offer={offer} />)
      )}
    </div>
  );
};

export default DashboardListingOffersPage;
