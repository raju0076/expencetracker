import { Mic } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCity } from "../Redux/action";
import "../styles/mic.css";

export const VoiceRecorder = () => {
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function startListening() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    setIsListening(true);
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      dispatch(addCity(spokenText));

      setTimeout(() => {
        setIsListening(false);
        navigate(`/rest`);
      }, 1000);
    };

    recognition.onerror = (error) => {
      console.error("Speech recognition error:", error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
       <h2 className="mr-10 text-white  text-2xl z-50 fixed bottom-1/4 left-3/4 "
       >"Say <span className="text-green-600 text-4xl">City</span> Name to Know Top5 Restaurants  and food items"</h2>

      <div className="body">
        <div className="mic" onClick={startListening}>
          <Mic className="mic-icon" size={60} color="white" />
          <div className="mic-shadow"></div>
        </div>
      </div>

      {isListening && (
  <p className="mt-20 text-white z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    Listening...
  </p>
)}

     
    </div>
  );
};

export default VoiceRecorder;
