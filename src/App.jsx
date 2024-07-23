import React, { useState } from "react";
import Select from "react-select";
import "./sass/global.scss"; // Ensure this path matches your directory structure

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "banana", label: "banana" },
    { value: "orange", label: "orange" },
    { value: "car", label: "car" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "#ccc" : "#ccc",
      "&:hover": {
        borderColor: state.isFocused ? "#ccc" : "#ccc",
      },
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#ccc" : "#ccc",
    }),
  };

  return (
    <div className="container form">
      <div className="form__content">
        <h1>Title</h1>
        <form>
          <div className="input">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="name" />
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
            <textarea cols="30" rows="10" placeholder="text"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
