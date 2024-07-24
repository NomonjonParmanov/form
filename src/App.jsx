import React from "react";
import Form from "./components/form/Form";
import { Route, Routes } from "react-router-dom";
import List from "./components/list/List";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}

export default App;
