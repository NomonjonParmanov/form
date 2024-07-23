import React, { useState } from "react";
import Select from "react-select";
import "./sass/global.scss"; // Ensure this path matches your directory structure

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "banana", label: "banana" },
    { value: "orange", label: "orange" },
    { value: "car", label: "car" },
  ];

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#ccc" : "#ccc",
    }),
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setSelectedOptions([]);
    setText("");
  };
  console.log(name, selectedOptions, text);
  return (
    <div className="container form">
      <div className="form__content">
        <h1>Title</h1>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="name"
            />
          </div>
          <div className="selected">
            <label htmlFor="">Select</label>
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: "neutral30",
                },
              })}
              onChange={setSelectedOptions}
              styles={customStyles}
              className="custom-select"
              placeholder="Select"
            />
          </div>
          <div className="textarea">
            <label htmlFor="">Text</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              cols="30"
              rows="10"
              placeholder="text"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
