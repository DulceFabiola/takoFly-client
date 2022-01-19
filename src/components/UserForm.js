import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserForm = ({ name, lastname, address, email }) => {
  const [message, setMessage] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    address: "",
    email: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("reservacion completa");
    setMessage("¡Gracias por tu reserva!");
  };

  return (
    <div className="container">
      <p>Información personal</p>
      <form
        className="col"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>Nombre:</label>
        <input
          className="user-input"
          placeholder="ej: Bruno"
          type="text"
          onChange={(event) => {
            handleChange(event);
          }}
          name="name"
          required
        >
          {name}
        </input>
        <label>Apellido(s):</label>
        <input
          className="user-input"
          placeholder="ej: Díaz"
          type="text"
          onChange={(event) => {
            handleChange(event);
          }}
          name="lastname"
          required
        >
          {lastname}
        </input>
        <label>Dirección:</label>
        <input
          className="user-input"
          placeholder="ej: Ciudad Gótica"
          type="text"
          onChange={(event) => {
            handleChange(event);
          }}
          name="address"
          required
        >
          {address}
        </input>
        <label>Correo electrónico</label>
        <input
          className="user-input"
          placeholder="ej: bruno@gmail.com"
          type="email"
          onChange={(event) => {
            handleChange(event);
          }}
          name="email"
          required
        >
          {email}
        </input>

        <Link to="/my-reservations">
          <p className="success-text">{message}</p>
        </Link>
        <button className="btn" type="submit">
          ¡Reservar!
        </button>
      </form>
    </div>
  );
};

export default UserForm;
