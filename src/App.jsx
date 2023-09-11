import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert.jsx";
export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#282b2ede";
    }
  }
  return (
    <div style={{ color: mode === "dark" ? "white" : "black" }}>
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <div className="container my-3 ">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
    </div>
  );
}
