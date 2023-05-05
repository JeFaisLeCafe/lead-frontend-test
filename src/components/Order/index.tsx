import "./index.css";
import { ShipupOrdersDatum, Trackers } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface OrderProps {
  order: ShipupOrdersDatum;
}

const Order = ({ order }: OrderProps) => {
  const [trackers, setTrackers] = useState<Trackers>();

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await axios.get<Trackers>("trackers");
      setTrackers(apiResponse.data);
    };
    fetchData();
  }, []);

  return (
    <div className="order-container">
      <p>
        Data for order #{order.order_number}, by {order.first_name}{" "}
        {order.last_name}
      </p>

      <p>Trackers:</p>
      {trackers?.data.map((tracker) => (
        <ul key={tracker.id}>
          <Link to={`/tracker/${tracker.tracking_number}`}>
            <p>{tracker.tracking_number}</p>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default Order;
