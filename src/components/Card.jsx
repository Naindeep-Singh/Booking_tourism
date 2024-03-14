/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
import { useState } from "react";

function Card({ id, name, info, image, price }) {
  const [booked, setBooked] = useState(false);
  function bookingHandler({ id }) {
    console.log("booked", id);
    if (booked) {
      toast.warning("Removed booking");
    } else {
      toast.success("Booked!", id);
    }
    setBooked(!booked);
  }

  return (
    <div className="card">
      <img src={image} alt="error" className="image" />

      <div className="tour-details">
        <h2 className="tour-price">{price}</h2>
        <h2 className="tour-name">{name}</h2>
      </div>

      <div className="description">{info}</div>

      <button
        className={`btn-red ${booked ? "btn-disabled" : ""}`}
        onClick={() => bookingHandler(id)}
      >
        {booked ? "Remove Booking" : "Book Now"}
      </button>
    </div>
  );
}

export default Card;
