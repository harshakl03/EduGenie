import React, { useState, useRef, useEffect } from "react";
import { Copy, Send, Share } from "lucide-react";
import toast from "react-hot-toast";

const ChatMain = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingText]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setTypingText("");

    setTimeout(() => {
      const fullText = `Sure! Here's the answer to "${input}" 👇`;
      let index = 0;

      const typeChar = () => {
        if (index < fullText.length) {
          setTypingText((prev) => prev + fullText[index]);
          index++;
          setTimeout(typeChar, 25); // Typing speed
        } else {
          setIsTyping(false);
          setMessages((prev) => [...prev, { sender: "bot", text: fullText }]);
          setTypingText("");
        }
      };

      typeChar();
    }, 500); // Simulated server delay
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const handleShare = (text) => {
    if (navigator.share) {
      navigator
        .share({ text })
        .catch((err) => console.error("Share failed:", err));
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  const renderWelcome = () => (
    <>
      <div className="px-8 pt-8">
        <h2 className="flex text-3xl justify-center items-center font-extrabold text-blue-600 drop-shadow">
          Edu Genie
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center text-center py-12">
        <img src="/image.png" alt="Genie" className="w-36 h-36 mb-10" />
        <h2 className="text-2xl font-semibold text-gray-800">Hi Pavan D</h2>
        <p className="text-lg text-gray-600 mt-1">
          Ask Edu Genie for one step academic solution
        </p>
      </div>
    </>
  );

  const renderMessages = () => (
    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
      {messages.map((msg, idx) => {
        const isUser = msg.sender === "user";
        const isBot = msg.sender === "bot";

        return (
          <div
            key={idx}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`relative max-w-[75%] p-4 rounded-2xl border shadow ${
                isUser
                  ? "bg-blue-100 border-blue-200"
                  : "bg-white border-gray-300"
              }`}
            >
              <p className="text-gray-800 whitespace-pre-line">{msg.text}</p>
              {isBot && (
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
              )}
            </div>
          </div>
        );
      })}

      {/* Typing effect with gradient text in matching bubble */}
      {isTyping && (
        <div className="flex justify-start">
          <div className="relative max-w-[75%] min-h-[56px] p-4 rounded-2xl border border-blue-300 shadow bg-white">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-typing text-base font-medium whitespace-pre-line">
              {typingText}
            </p>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );

  return (
    <div className="w-full h-[calc(100vh-120px)] px-4 md:px-8 py-6">
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col rounded-3xl border-2 border-blue-400 bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-2xl overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-auto">
            {messages.length === 0 ? renderWelcome() : renderMessages()}
          </div>
        </div>

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
