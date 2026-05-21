export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2 className="logo">🏥 MediCare</h2>

      <ul className="sidebar-menu">
        <li onClick={() => setPage("dashboard")}>
          📊 Dashboard
        </li>

        <li onClick={() => setPage("patients")}>
          🧑 Patients
        </li>

        <li onClick={() => setPage("doctors")}>
          👨‍⚕️ Doctors
        </li>

        <li onClick={() => setPage("documents")}>
          📄 Documents
        </li>

        <li onClick={() => setPage("medication")}>
          💊 Medication
        </li>

        <li onClick={() => setPage("messages")}>
          💬 Messages
        </li>

        <li onClick={() => setPage("settings")}>
          ⚙️ Settings
        </li>
      </ul>
    </div>
  );
}
