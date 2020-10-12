import React from "react";
// import { useSelector } from "react-redux";

import Header from "./components/Header";
import Actions from "./components/Actions";
import List from "./components/List";
import Form from "./components/Form";
import "./styles.css";
import TodosProvider from "./context/TodosProvider";

export default function App() {
  // const todos = useSelector((state) => state);
  return (
    <TodosProvider>
      <div className="App section">
        <Header />
        <Form />
        <Actions />
        <List />
      </div>
    </TodosProvider>
  );
}
