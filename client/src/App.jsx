import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [persona, setPersona] = useState("anshuman");
  const [loading, setLoading] = useState(false);

  const suggestions = {
    anshuman: [
      "How do I stay consistent with coding?",
      "How to improve problem solving fast?",
      "I keep procrastinating—what should I do?",
    ],
    abhimanyu: [
      "How should I think about long-term growth?",
      "What systems help build consistency?",
      "How to stand out in tech?",
    ],
    kshitij: [
      "Explain recursion simply",
      "How to start coding from scratch?",
      "How do I build daily study habits?",
    ],
  };

  const sendMessage = async () => {
    setLoading(true);

    if (!message) return;

    const newChat = [...chat, { role: "user", text: message }];
    setChat(newChat);

    try {
      const res = await fetch("https://solid-robot-dgt0.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          persona,
        }),
      });

      const data = await res.json();

      setChat([...newChat, { role: "bot", text: data.reply }]);
      setLoading(false);
    } catch (err) {
      setChat([
        ...newChat,
        { role: "bot", text: "Error connecting to server" },
      ]);
      setLoading(false);
    }

    setMessage("");
  };
  const handleSuggestionClick = (text) => {
    setMessage(text);
  };

  return (
    <div className="container">
      <div className="header">Persona Chatbot</div>

      <h3>Current Persona: {persona}</h3>

      <div className="persona-switch">
        <button
          onClick={() => {
            setPersona("anshuman");
            setChat([]);
          }}
        >
          Anshuman
        </button>

        <button
          onClick={() => {
            setPersona("abhimanyu");
            setChat([]);
          }}
        >
          Abhimanyu
        </button>

        <button
          onClick={() => {
            setPersona("kshitij");
            setChat([]);
          }}
        >
          Kshitij
        </button>
      </div>

      <div className="chat-box">
        {chat.map((msg, index) => (
          <div key={index} className={msg.role === "user" ? "user" : "bot"}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="bot">⚡ Processing...</div>}
      </div>

      <div className="input-box">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div className="suggestions">
        {suggestions[persona].map((s, i) => (
          <button key={i} onClick={() => handleSuggestionClick(s)}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
