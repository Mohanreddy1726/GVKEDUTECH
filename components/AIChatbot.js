"use client";

import { useState } from "react";
import {
  ConversationProvider,
  useConversation,
} from "@elevenlabs/react";

function ChatUI() {
  const [isOpen, setIsOpen] = useState(false);

  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onError: (err) => console.log(err),
  });

  const startConversation = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      await conversation.startSession({
        agentId:
          process.env.NEXT_PUBLIC_ELEVEN_AGENT_ID,
      });
    } catch (err) {
      console.log(err);
      alert("Mic permission required");
    }
  };

  const stopConversation = async () => {
    await conversation.endSession();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background:
            "linear-gradient(90deg,#dc2626,#1d4ed8)",
          color: "white",
          border: "none",
          borderRadius: "999px",
          padding: "12px 18px",
          cursor: "pointer",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.25)",
          fontWeight: "600",
        }}
      >
        <img
          src="https://ik.imagekit.io/abhobz66j/GVK%20Images/logo.jpg?updatedAt=1776492281519"
          alt="GVK"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
          }}
        />

        AI Counselor
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "25px",
            width: "360px",
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow:
              "0 20px 60px rgba(0,0,0,0.25)",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div
            style={{
              background:
                "linear-gradient(90deg,#dc2626,#1d4ed8)",
              color: "white",
              padding: "16px",
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <img
              src="https://ik.imagekit.io/abhobz66j/GVK%20Images/logo.jpg?updatedAt=1776492281519"
              alt="GVK"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
              }}
            />

            <div>
              <h3 style={{ margin: 0 }}>
                GVK AI Counselor
              </h3>
              <small>
                MBBS • Masters • Visa
              </small>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "18px" }}>
            <p>
              👋 Ask me about MBBS,
              Masters, Scholarships or
              Visa guidance.
            </p>

            <p>
              Status:
              <strong
                style={{
                  color:
                    conversation.status ===
                    "connected"
                      ? "green"
                      : "red",
                  marginLeft: 8,
                }}
              >
                {conversation.status}
              </strong>
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                onClick={startConversation}
                style={{
                  flex: 1,
                  background: "#2563eb",
                  color: "white",
                  border: 0,
                  borderRadius: "10px",
                  padding: "12px",
                  cursor: "pointer",
                }}
              >
                🎙 Start
              </button>

              <button
                onClick={stopConversation}
                style={{
                  flex: 1,
                  background: "#dc2626",
                  color: "white",
                  border: 0,
                  borderRadius: "10px",
                  padding: "12px",
                  cursor: "pointer",
                }}
              >
                Stop
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function AIChatbot() {
  return (
    <ConversationProvider>
      <ChatUI />
    </ConversationProvider>
  );
}