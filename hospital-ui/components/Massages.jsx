export default function Messages() {
  const messages = [
    {
      id: 1,
      sender: "Dr. Rajesh Mehta",
      text: "Patient reports are ready.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "Reception",
      text: "Appointment confirmed for tomorrow.",
      time: "09:15 AM",
    },
    {
      id: 3,
      sender: "Lab Department",
      text: "Blood test completed successfully.",
      time: "Yesterday",
    },
  ];
   return (
    <div className="page">
      <div className="page-header">
        <h2>Messages</h2>
        <button className="primary-btn">+ New Message</button>
      </div>

      <div className="messages-list">
        {messages.map((msg) => (
          <div className="message-card" key={msg.id}>
            <div>
              <h4>{msg.sender}</h4>
              <p>{msg.text}</p>
            </div>

            <span>{msg.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
