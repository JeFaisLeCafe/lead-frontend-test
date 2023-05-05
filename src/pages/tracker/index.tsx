import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Trackers, TrackersDatum } from "../../types";

const Tracker = () => {
  const { tracking_number } = useParams();

  const [trackerInfo, setTrackerInfo] = useState<TrackersDatum>();

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await axios.get<Trackers>("trackers", {
        params: { tracking_number: tracking_number }
      });
      setTrackerInfo(apiResponse.data?.data[0]);
    };
    fetchData();
  }, [tracking_number]);

  console.log(trackerInfo);

  return (
    <div>
      <Link to="..">Go Back</Link>
      <h2>Tracker Notification History</h2>
      <p>Tracking number: {tracking_number}</p>
      <p>
        Tracking link:{" "}
        <a href={trackerInfo?.tracking_link}>{trackerInfo?.tracking_link}</a>
      </p>

      {trackerInfo?.notifications?.data.map((notification) => (
        <div key={notification.id}>
          <p>{notification.id}</p>
          <p>{notification.created_at}</p>
          <p>{notification.status_code}</p>
          <hr />
        </div>
      ))}

      {trackerInfo?.notifications?.data.length === 0 && (
        <p>No notifications yet.</p>
      )}
    </div>
  );
};

export default Tracker;
