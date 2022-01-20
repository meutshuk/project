import "./App.css";
import Contact from "./component/Contact";
import React, { useEffect, useState } from "react";

function App() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="contact-container">
      <Contact data={contact}/>
    </div>
  );
}

export default App;
