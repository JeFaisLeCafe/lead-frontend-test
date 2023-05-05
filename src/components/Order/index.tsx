import "./index.css";
import { ShipupOrdersDatum, Trackers } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <ul>
          <a>
            <p>{tracker.tracking_number}</p>
          </a>
        </ul>
      ))}
    </div>
  );
};

export default Order;
