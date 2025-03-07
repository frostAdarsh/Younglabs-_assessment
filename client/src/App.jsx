import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    if (!name.trim()) {
      setMessage("Name is required.");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5000/api/greet?name=${name}`
      );
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage("Error fetching greeting.");
    }
  };

  return (
    <>
      <div className="boxtwo">
        <div className="boxone">
          <h1>Greeting App</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={getGreeting}>Greeting</button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
