import { useState } from "react";

export default function Documents() {
  const [docs, setDocs] = useState([
    {
      id: 1,
      name: "Blood Test Report",
      patient: "Rohit Patil",
      type: "Lab Report",
      doctor: "Dr. Smith ",
      date: "12 Jan 2026",
    },
    {
      id: 2,
      name: "X-Ray Chest",
      patient: "Neha Joshi",
      type: "Radiology",
      doctor: "Dr. Jones",
      date: "10 Jan 2026",
    },
  ]);

  const [doctorName, setDoctorName] =
    useState("Dr.  Smith");

  const [patientName, setPatientName] =
    useState("");

  const [docType, setDocType] =
    useState("");

  // Upload File

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const newDoc = {
      id: Date.now(),

      name: file.name,

      patient:
        patientName || "Unknown Patient",

      type:
        docType || "Uploaded File",

      doctor: doctorName,

      date:
        new Date().toLocaleDateString(),
    };

    setDocs([...docs, newDoc]);

    // Clear Fields

    setPatientName("");
    setDocType("");
    setDoctorName("Dr. Jones");
  };

  // Delete Document

  const deleteDocument = (id) => {
    const updatedDocs = docs.filter(
      (doc) => doc.id !== id
    );

    setDocs(updatedDocs);
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2>Documents</h2>
      </div>

      {/* Upload Section */}

      <div className="card upload-card">

        {/* Patient Name */}

        <input
          type="text"
          placeholder="Enter Patient Name"
          value={patientName}
          onChange={(e) =>
            setPatientName(e.target.value)
          }
        />

        {/* Document Type */}

        <input
          type="text"
          placeholder="Enter Document Type"
          value={docType}
          onChange={(e) =>
            setDocType(e.target.value)
          }
        />

        {/* Doctor Select */}

        <select
          value={doctorName}
          onChange={(e) =>
            setDoctorName(e.target.value)
          }
        >
          <option value="Dr. Smith">
            Dr. Smith
          </option>

          <option value="Dr.Jones ">
            Dr. Jones 
          </option>

          <option value="Dr. Williams">
            Dr. Williams
          </option>

          <option value="Dr. Sneha Patil">
            Dr. Sneha Patil
          </option>
        </select>

        {/* Upload Button */}

        <label className="upload-btn">
          + Upload File

          <input
            type="file"
            hidden
            onChange={handleFileUpload}
          />
        </label>
      </div>

      {/* Table */}

      <div className="card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Document</th>
              <th>Patient</th>
              <th>Type</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {docs.map((d) => (
              <tr key={d.id}>
                <td>📄 {d.name}</td>
                <td>{d.patient}</td>
                <td>{d.type}</td>
                <td>{d.doctor}</td>
                <td>{d.date}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteDocument(d.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
