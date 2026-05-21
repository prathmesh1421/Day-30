import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="page">
      <h2>Settings</h2>

      <div className="settings-card">
        <div className="setting-item">
          <div>
            <h4>Dark Mode</h4>
            <p>Enable dark theme for dashboard</p>
          </div>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
         <div className="setting-item">
          <div>
            <h4>Email Notifications</h4>
            <p>Receive updates via email</p>
          </div>

          <input type="checkbox" defaultChecked />
        </div>

        <div className="setting-item">
          <div>
            <h4>Auto Backup</h4>
            <p>Automatically backup records</p>
          </div>

          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}
