import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Menu />
      <Home />
    </div>
  );
}
