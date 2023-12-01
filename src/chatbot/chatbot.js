import React, { useEffect, useRef, useState } from "react";
import "./chatbot.css";
import Header from "../Headers/header";
import DoctorCard from "../doctor/doctor-card";
import Button from "react-bootstrap/Button";
import APICall from "./APICall";
import { sendMessage } from "../whatsapp/WhatsAppSender";

const API_KEY = "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"; // Replace 'YOUR_API_KEY' with your actual API key

const DATA_MESSAGE = [
  {
    type: "user",
    text: "Hi There",
  },
  {
    type: "bot",
    text: "I am not feeling well",
  },
  {
    type: "user",
    text: "Do you want to connect to doctor",
  },
  {
    type: "bot",
    text: "Yes Please",
  },
  {
    type: "user",
    text: "Yes Please",
    isDoctor: true,
  },
  {
    type: "bot",
    text: "appointment with Dr. John Deo",
  },
  {
    type: "user",
    text: "appointment with Dr. John Deo",
    isTime: true,
  },
  {
    type: "bot",
    text: "Appointment Booked",
  },
];
const Chatbot = () => {
  const chatListRef = useRef(null);
  const [info, setInfo] = useState();
  const [messages, setMessages] = useState([
    {
      type: "user",
      text: "Hi There",
      // isSelectType: true,
    },
  ]);
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

    if (textInput.toLowerCase().includes("not feeling")) {
      const updatedMessages = [
        ...conversation,
        { type: "bot", text: "I am not feeling well" },
        { type: "user", text: "Do you want to connect to doctor" },
      ];
      setMessages(updatedMessages);
    } else if (textInput.toLowerCase().includes("yes")) {
      const updatedMessages = [
        ...conversation,
        { type: "bot", text: "Yes Please" },
        {
          type: "user",
          text: "Yes Please",
          isSelectType: true,
          //isDoctor: true,
        },
      ];
      setMessages(updatedMessages);
    }
    setTextInput("");
    scrollToBottom();

    return;

    ///------------------------

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
    scrollToBottom();
  };

  const selectDoctor = (docter) => {
    this.setInfo({
      ...info,
      doctorName: docter,
    });
    const conversation = [...messages];
    const updatedMessages = [
      ...conversation,
      {
        type: "bot",
        text: "appointment with Dr. John Deo",
      },
      {
        type: "user",
        text: "",
        isTime: true,
      },
    ];
    setMessages(updatedMessages);
  };

  const selectTime = () => {
    const conversation = [...messages];
    const updatedMessages = [
      ...conversation,
      {
        type: "bot",
        text: "Appointment Booked",
      },
    ];
    setMessages(updatedMessages);
    APICall();
    sendMessage({ message: "Your appointment has been booked" });
  };

  const selectType = () => {
    const conversation = [...messages];
    const updatedMessages = [
      ...conversation,
      {
        type: "bot",
        text: "Online video call",
      },
      {
        type: "",
        text: "",
        isDoctor: true,
      },
    ];
    setMessages(updatedMessages);
  };

  const scrollToBottom = () => {
    chatListRef.current.scrollTo({
      top: chatListRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Scroll to bottom on initial render
    scrollToBottom();
  }, []);

  const renderChatItem = (item, index) => {
    // Extracting the part of user input after the selected language phrase
    const languagePrefix = `Talk in ${selectedLanguage}`;
    const displayText =
      item.type === "user" ? item.text.replace(languagePrefix, "") : item.text;

    const isDoctor = item?.isDoctor;
    const isTime = item?.isTime;
    const isSelectType = item?.isSelectType;

    if (isDoctor) {
      return (
        <view
          style={{ display: "flex", flexDirection: "row", paddingBottom: 12 }}
        >
          <div onClick={() => selectDoctor("Jyoti Mali")}>
            <DoctorCard
              imageUrl="https://placekitten.com/300/200" // Replace with the actual image URL
              name="Jyoti Mali" // Replace with the actual name
              experience="5 years of experience" // Replace with the actual experience
            />
          </div>

          <div onClick={() => selectDoctor("Akash Patil")}>
            <DoctorCard
              imageUrl="https://placekitten.com/300/200" // Replace with the actual image URL
              name="Akash Patil" // Replace with the actual name
              experience="6 years of experience" // Replace with the actual experience
            />
          </div>
        </view>
      );
    }

    if (isTime) {
      return (
        <view style={{ backgroundColor: "gray" }}>
          <p>Doctor is available at 02 Dec, Please select time</p>
          <view
            style={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: 12,
            }}
          >
            <Button
              variant="outline-primary"
              style={{ width: 120, marginRight: 10 }}
              onClick={selectTime}
            >
              10:00 AM
            </Button>
            {"  "}
            <Button
              variant="outline-primary"
              style={{ width: 120 }}
              onClick={selectTime}
            >
              02:00 PM
            </Button>{" "}
          </view>
        </view>
      );
    }

    if (isSelectType) {
      return (
        <view
          style={{ display: "flex", flexDirection: "row", paddingBottom: 12 }}
        >
          <Button
            variant="outline-primary"
            style={{ width: 120, marginRight: 10 }}
            onClick={selectType}
          >
            Online video call
          </Button>
          {"  "}
          <Button
            variant="outline-primary"
            style={{ width: 120 }}
            onClick={selectType}
          >
            Visit your doctor
          </Button>
        </view>
      );
    }

    return (
      <div
        key={index}
        className={item.type === "user" ? "userChat" : "botChat"}
      >
        <div className="chatBubble">
          <p className="chatp">{displayText}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="chatList" ref={chatListRef}>
        {messages.map((message, index) => renderChatItem(message, index))}
      </div>
      <div className="inputContainer">
        {/*  <select
          class="styled-select"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
           {languageChoice.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select> */}
        <view className="bottomButton">
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
        </view>
      </div>
    </div>
  );
};

export default Chatbot;
