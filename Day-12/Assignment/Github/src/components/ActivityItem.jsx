import React from "react";

const ActivityItem = ({ activity }) => {
  return (
    <li>
      <p>Event: {activity.type}</p>
      <p>Repo: {activity.repo.name}</p>
      <p>Time: {new Date(activity.created_at).toLocaleString()}</p>
    </li>
  );
};

export default ActivityItem;
