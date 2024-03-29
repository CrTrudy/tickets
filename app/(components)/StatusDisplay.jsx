import React from "react";

const getColor = (status) => {
  let color = "bg-slate-700";
  switch (status.toLowerCase()) {
    case "done":
      color = "bg-green-300";
      return color;
    case "started":
      color = "bg-yellow-300";
      return color;
    case "not started":
      color = "bg-red-300";
      return color;
  }
  return color;
};

const StatusDisplay = ({ status }) => {
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-grey-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
