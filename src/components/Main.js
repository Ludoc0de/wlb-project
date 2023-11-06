import React, { useState, useEffect } from "react";
import Product from "./Product";

const Message = ({ message }) => (
  <section
    className="hero min-h-screen flex py-80 md:py-40 pl-8"
    style={{
      backgroundImage: "url(/wlb121.jpeg)",
    }}
  >
    <div className="hero-content text-left text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-6xl font-bold gold-wlb font-raleway">WLB</h1>
        <p className="mb-10 text-3xl font-satisfy">{message}</p>
        <li className="gold-wlb list-none">
          <a href="/">Accueil</a>
        </li>
      </div>
    </div>
  </section>
);

export default function Main() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Nous vous remercions! Votre réservation est confirmé");
    }

    if (query.get("canceled")) {
      setMessage("Accompte annulée - revenez lorsque vous serez prêt.");
    }
  }, []);

  return message ? <Message message={message} /> : <Product />;
}
