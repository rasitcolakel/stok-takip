import React from "react";

export default function Logout() {
  React.useEffect(() => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }, []);
  return <div></div>;
}
