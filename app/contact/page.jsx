import React from "react";
import Consult from "@/components/home/Consult";
import ContactFromHome from "@/components/home/ContactFromHome";

function ContactPage() {
  return (
    <div>
      <div className="flex justify-center bg-primary">
        <ContactFromHome />
      </div>
      <Consult />
    </div>
  );
}

export default ContactPage;
