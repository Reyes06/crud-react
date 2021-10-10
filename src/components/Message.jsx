import React from "react";

export default function Message({ message, alertType }) {
  const classNameAlert = "alert alert-" + alertType;
  return (
    <div className={classNameAlert} role="alert">
      {message}
    </div>
  );
}
