export default function Table({ data }) {
  return (
    <div className="table-card">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Disease</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.disease}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
