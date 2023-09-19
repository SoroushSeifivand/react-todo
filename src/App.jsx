import { useState } from "react";
import "./App.css";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  let newTodo = {
    id: todos.length + 1,
    input: inputValue,
    isDone: isDone,
  };
  const addTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };
  const deleteTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };
  const handlePress = (e) => {
    if (e.charCode === 13) {
      addTodo();
    }
  };
  const handleDone = (isDone, id) => {
    if (id) {
      console.log("before", isDone, id);
      setIsDone(true);
      console.log("after", isDone, id);
    }
  };
  return (
    <div className="  flex justify-center h-screen w-full bg-purple-950 flex-col items-center">
      <div className="titleWrapper mb-24">
        <p className=" text-4xl font-bold text-white">TODO LIST</p>
      </div>
      <div className="inputWrapper flex flex-row items-center gap-12">
        <input
          className=" w-64 h-8 rounded-md pl-1"
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handlePress}
        />
        <button
          className=" bg-white  w-20 h-8 rounded-md text-center"
          onClick={() => addTodo()}
        >
          Enter
        </button>
      </div>
      <div className="listWrapper w-96 h-96 bg-white mt-3 rounded-md">
        <ul>
          {todos.map(({ id, input, isDone }) => (
            <li
              key={id}
              className={`pl-1 mt-2 flex justify-between items-center h-7 hover:shadow-all duration-100 ${
                isDone ? "bg-green-500" : ""
              }`}
            >
              {input}
              <span className="flex gap-3 pr-2 ">
                <AiOutlineCheck
                  className="cursor-pointer hover:scale-125"
                  onClick={() => handleDone(isDone, id)}
                />
                <AiOutlineClose
                  className="cursor-pointer hover:scale-125"
                  onClick={() => deleteTodo(id)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
