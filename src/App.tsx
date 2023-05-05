import { useEffect, useState } from "react";
import "./App.css";
import { BASE_API_URL } from "./links";
import axios from "axios";
import { ShipupOrders } from "./types";
import Order from "./components/Order";

const key = import.meta.env.VITE_API_KEY;

axios.defaults.baseURL = BASE_API_URL;
axios.defaults.headers.common["Authorization"] = key;

function App() {
  const [ordersData, setOrdersData] = useState<ShipupOrders>();

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await axios.get<ShipupOrders>("orders", {
        params: { order_number: "UK1876YH08_2" }
      });
      setOrdersData(apiResponse.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Order Info</h2>

      {ordersData?.data.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
}

export default App;
