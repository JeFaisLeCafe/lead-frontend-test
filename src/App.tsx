import { useEffect, useState } from "react";
import "./App.css";
import { BASE_API_URL } from "./links";
import axios from "axios";
import { ShipupOrder } from "./type";

const key = import.meta.env.VITE_API_KEY;

axios.defaults.baseURL = BASE_API_URL;
axios.defaults.headers.common["Authorization"] = key;

function App() {
  const [data, setData] = useState<ShipupOrder>();

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await axios.get<ShipupOrder>("orders", {
        params: { order_number: "UK1876YH08_2" }
      });
      setData(apiResponse.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <p>Data for order #UK1876YH08_2</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
