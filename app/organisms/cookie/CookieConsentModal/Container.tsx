"use client";
import React, { useState } from "react";
import { Presentational } from "@/app/organisms/cookie/CookieConsentModal/Presentational";

export function CookieConsentModal() {
  const [isModalOpen, setModalOpen] = useState(true);

  const handleAccept = () => {
    console.log("Cookies accepted.");
    setModalOpen(false);
  };

  const handleReject = () => {
    console.log("Cookies rejected.");
    setModalOpen(false);
  };

  return (
    <Presentational
      isOpen={isModalOpen}
      onAccept={handleAccept}
      onReject={handleReject}
    />
  );
}
