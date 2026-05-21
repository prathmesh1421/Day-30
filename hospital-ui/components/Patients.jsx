import { useState, useEffect } from "react";

export default function Patients() {
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "patients",
      JSON.stringify(patients)
    );
  }, [patients]);

  const addPatient = () => {
    if (!name || !age) return;

    setPatients([
      ...patients,
      {
        id: Date.now(),
        name,
        age,
      },
    ]);

    setName("");
    setAge("");
  };

  return (
    <section aria-label="Patients Section">
      <div className="page-header">
        <h2>Patients</h2>
      </div>

      {/* Form */}

      <div className="card patient-form">
        <h3>Add Patient</h3>

        <input
          aria-label="Patient Name"
          placeholder="Enter patient name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          aria-label="Patient Age"
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) =>
            setAge(e.target.value)
          }
        />

        <button onClick={addPatient}>
          Save Patient
        </button>
      </div>

      {/* Table */}

      <div className="card">
        <table
          aria-label="Patients Table"
          className="custom-table"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
