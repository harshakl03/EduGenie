import React, { useState, useRef, useEffect } from "react";
import { Copy, Send, Share } from "lucide-react";
import toast from "react-hot-toast";

const ChatMain = () => {
  const [messages, setMessages] = useState([]); // Stores conversation messages
  const [input, setInput] = useState(""); // Stores user input text
  const messagesEndRef = useRef(null); // Ref to auto-scroll to last message

  // Auto-scroll to latest message whenever the messages array changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending a message
  const handleSend = () => {
    if (!input.trim()) return; // Prevent empty messages
    const userMessage = { sender: "user", text: input };

    // TODO: Replace below mock response with actual API/bot logic
    const botResponse = {
      sender: "bot",
      text: `YOU 🫵🏼 "${input}" pussy`, // <-- Replace this with appropriate bot logic
    };

    // Add both user and bot messages to state
    setMessages((prev) => [...prev, userMessage, botResponse]);
    setInput(""); // Clear input field
  };

  // Copy text to clipboard with feedback
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  // Share text using native share dialog
  const handleShare = (text) => {
    if (navigator.share) {
      navigator
        .share({ text })
        .catch((err) => console.error("Share failed:", err));
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  // Render welcome UI when there are no messages yet
  const renderWelcome = () => (
    <>
      <div className="px-8 pt-8">
        <h2 className="flex text-3xl justify-center items-center font-extrabold text-blue-600 drop-shadow">
          Edu Genie
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center text-center py-12">
        <img src="/image.png" alt="Genie" className="w-35 h-35 mb-10" />
        <h2 className="text-2xl font-semibold text-gray-800">Hi Pavan.D</h2>
        <p className="text-lg text-gray-600 mt-1">
          Ask Edu Genie for one step academic solution
        </p>
      </div>
    </>
  );

  // Render the chat messages list
  const renderMessages = () => (
    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`relative max-w-[75%] p-4 rounded-2xl backdrop-blur-sm border shadow-md ${
              msg.sender === "user" ? "bg-blue-100" : "bg-white/80"
            }`}
          >
            <p className="text-gray-800">{msg.text}</p>

            {/* Copy and Share Buttons */}
            <div className="mt-2 flex gap-2 justify-end text-gray-500 text-sm">
              <button
                onClick={() => handleCopy(msg.text)}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                <Copy size={14} /> Copy
              </button>
              <button
                onClick={() => handleShare(msg.text)}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                <Share size={14} /> Share
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Invisible anchor to scroll into view */}
      <div ref={messagesEndRef} />
    </div>
  );

  return (
    <div className="w-full h-[calc(100vh-120px)] px-4 md:px-8 py-6">
      {/* Chat container with gradient background and rounded borders */}
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col rounded-3xl border-2 border-blue-400 bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-2xl overflow-hidden">
        {/* Chat display area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-auto">
            {/* Show welcome screen or chat messages */}
            {messages.length === 0 ? renderWelcome() : renderMessages()}
          </div>
        </div>

        {/* User input area */}
        <div className="px-6 py-5 border-t bg-white/80 backdrop-blur-md">
          <div className="flex items-center border border-blue-300 rounded-xl px-4 py-3 bg-white shadow-sm">
            <input
              type="text"
              placeholder="Ask Edu Genie"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 text-sm bg-transparent focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="text-blue-600 hover:text-blue-800 p-2"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
