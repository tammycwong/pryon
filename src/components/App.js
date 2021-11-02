import React from "react";
import Menu from "./Menu";
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";

export default function App() {
  // const { isLoading } = useAuth0();

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Menu />
      {/* <LoginButton/>
          <LogoutButton/> */}
    </div>
  );
}
