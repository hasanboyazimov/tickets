"use client";
import { useState } from "react";

export default function AddTicket() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      title,
      body,
      priority,
    };

    try {
      const response = await fetch("http://localhost:4000/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        alert("Post submitted successfully!");
        setTitle("");
        setBody("");
        setPriority("");
      } else {
        alert("Failed to submit post.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the post.");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          required
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="ticket title"
        />
        <textarea
          id="body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          type="text"
          placeholder="ticket body"
        />
        <select
          onChange={(e) => setPriority(e.target.value)}
          required
          name="priority"
          id="priority"
        >
          <option value="low">low</option>
          <option value="midium">midium</option>
          <option value="high">high</option>
        </select>
        <button className="btn btn-primary w-full" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
