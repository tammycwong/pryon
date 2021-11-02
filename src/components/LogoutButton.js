import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div>
        <button className="" onClick={() => logout()}>
          Log Out
        </button>
      </div>
    )
  )
}
