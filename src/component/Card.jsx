import React from "react";

export default function Card(props) {

    const { name, username, email, phone, address } = props;

  return (
    <div className="card">
      <div className="name">Name: {name} </div>
      <div className="username">Username: {username} </div>
      <div className="email">Email: {email}</div>
      <div className="phone">Phone Number: {phone} </div>
      <div className="address">
          <div>Address: {address.suite + " " + address.street}</div>
          <div>City: {address.city}</div>
      </div>
    </div>
  );
}
