export default function Medication() {
  const medicines = [
    {
      id: 1,
      patient: "Rohit Patil",
      medicine: "Paracetamol",
      dosage: "500mg",
      timing: "Morning",
    },
    {
      id: 2,
      patient: "Neha Joshi",
      medicine: "Amoxicillin",
      dosage: "250mg",
      timing: "Night",
    },
    {
      id: 3,
      patient: "Amit Kulkarni",
      medicine: "Vitamin D",
      dosage: "1 Tablet",
      timing: "After Lunch",
    },
  ];
 return (
    <div className="page">
      <div className="page-header">
        <h2>Medication</h2>
        <button className="primary-btn">+ Add Medicine</button>
      </div>

      <div className="card-grid">
        {medicines.map((m) => (
          <div className="medicine-card" key={m.id}>
            <h3>{m.medicine}</h3>
            <p><strong>Patient:</strong> {m.patient}</p>
            <p><strong>Dosage:</strong> {m.dosage}</p>
            <p><strong>Timing:</strong> {m.timing}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
