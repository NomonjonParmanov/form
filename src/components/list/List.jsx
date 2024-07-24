import React, { useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import here from "../../assets/here.avif";
import { NavLink } from "react-router-dom";
const List = () => {
  const [cards, setCards] = useState(() => {
    return JSON.parse(localStorage.getItem("lists")) || [];
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleDelete = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    localStorage.setItem("lists", JSON.stringify(updatedCards));
    setCards(updatedCards);
  };
  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditText(cards[index].text);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };
  const handleEditSave = () => {
    const updatedCards = cards.map((item, i) =>
      i === editIndex ? { ...item, text: editText } : item
    );
    localStorage.setItem("lists", JSON.stringify(updatedCards));
    setCards(updatedCards);
    setEditIndex(null);
    setEditText("");
  };
  return (
    <div className="container list">
      {cards.length > 0 ? (
        <div className="list__content">
          {cards.map((el, index) => (
            <div className="card" key={index}>
              <h2>
                {el.name}
                <MdDeleteForever
                  onClick={() => handleDelete(index)}
                  className="icon"
                />
              </h2>
              <div className="text">
                <p>
                  {editIndex === index ? (
                    <div>
                      <textarea
                        className="edit"
                        value={editText}
                        onChange={handleEditChange}
                        rows="3"
                        required
                      />
                      <button className="save" onClick={handleEditSave}>
                        Save
                      </button>
                    </div>
                  ) : (
                    el.text
                  )}
                </p>
                <MdEdit
                  onClick={() => handleEditClick(index)}
                  className="icon"
                />
              </div>
            </div>
          ))}
          <NavLink to={"/"}>
            <button className="form__btn">Form</button>
          </NavLink>
        </div>
      ) : (
        <div className="no-items">
          <img src={here} alt="No items found" className="img" />
          <NavLink to={"/"}>
            <button>Form</button>
          </NavLink>{" "}
        </div>
      )}
    </div>
  );
};

export default List;
