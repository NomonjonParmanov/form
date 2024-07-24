import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const data = new Date().getTime();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: data,
      name,
      text,
    };
    const list = JSON.parse(localStorage.getItem("lists")) || [];
    list.push(newItem);
    localStorage.setItem("lists", JSON.stringify(list));
    setName("");
    setText("");
  };

  return (
    <div className="body">
      <div className="container form">
        <div className="form__content">
          <h1>Title</h1>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="textarea">
              <label htmlFor="text">Text</label>
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                cols="30"
                rows="10"
                placeholder="Text"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <NavLink to={"/list"}>
            <button className="submit">Lists</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Form;
