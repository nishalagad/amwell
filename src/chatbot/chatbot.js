import React, { useState } from "react";
import "./chatbot.css";
import Header from "../Headers/header";

const API_KEY = "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"; // Replace 'YOUR_API_KEY' with your actual API key

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Initial language choice

  const languageChoice = ["English", "Hindi", "Marathi"];

  const generateAIResponse = async (conversation) => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
          },
          body: JSON.stringify({
            messages: [
              {
                role: "user",
                content: conversation[conversation.length - 1]?.text,
              },
            ],
            model: "whisper-1",
          }),
        }
      );

      const data = await response.json();
      const botResponse = data?.choices[0]?.message?.content;

      return botResponse;
    } catch (error) {
      console.error("Error generating AI response:", error);
      return null; // Handle the error as per your application's logic
    }
  };

  const handleSend = async () => {
    const conversation = [...messages]; // Copying the existing conversation
    const userMessage = {
      type: "user",
      text: `Talk in ${selectedLanguage} ${textInput}`,
    };
    conversation.push(userMessage);

    const botResponse = await generateAIResponse(conversation);
    if (botResponse !== null) {
      const updatedMessages = [
        ...conversation,
        { type: "bot", text: botResponse },
      ];
      setMessages(updatedMessages);
    } else {
      // Handle error case or retry logic if generating AI response fails
      console.log("Failed to generate AI response");
    }

    setTextInput("");
  };

  const renderChatItem = (item, index) => {
    // Extracting the part of user input after the selected language phrase
    const languagePrefix = `Talk in ${selectedLanguage}`;
    const displayText =
      item.type === "user" ? item.text.replace(languagePrefix, "") : item.text;

    return (
      <div
        key={index}
        className={item.type === "user" ? "userChat" : "botChat"}
      >
        <div className="chatBubble">
          <p>{displayText}</p>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <div className="container">
        {/* <h1>AI ChatBot</h1> */}
        <div className="chatList">
          {messages.map((message, index) => renderChatItem(message, index))}
        </div>
        <div className="inputContainer">
          <select
            class="styled-select"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languageChoice.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>

          <input
            class="styled-input"
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Ask me anything"
          />

          <button onClick={handleSend} class="button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
