import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Patients from "./components/Patients";
import Doctors from "./components/Doctors";
import Messages from "./components/Messages";
import Medications from "./components/Medications";
import Documents from "./components/Documents";
import Settings from "./components/Settings";
import Login from "./components/Login";
import "./styles/global.css";

export default function App() {
  const [page, setPage] = useState("login");
  const [dark, setDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  // Show Login Page First
  if (!isLoggedIn) {
    return (
      <Login
       setIsLoggedIn={setIsLoggedIn}
       setPage={setPage}
/>
    );
  }

  return (
    <div className="layout">
      <Sidebar setPage={setPage} />

      <div className="main">
        <Header dark={dark} setDark={setDark} />

        {page === "dashboard" && <Dashboard />}
        {page === "patients" && <Patients />}
        {page === "doctors" && <Doctors />}
         {page === "messages" && <Messages />}
        {page === "medications" && <Medications />}
        {page === "documents" && <Documents />}
        {page === "settings" && <Settings />}
      </div>
    </div>
  );
}
