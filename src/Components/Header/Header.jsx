import React, { useState } from "react";
import noteImage from "../../assets/images/notes.png";
import doubleTick from "../../assets/images/double-tick.png";
import plusImag from "../../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { added, allcomplete, clearcomplete } from "../../Redux/todos/actions";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  // new task handler
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  // complete all task handler
  const completeHandler = () => {
    dispatch(allcomplete());
  };

  // clear all task hander
  const clearHandler = () => {
    dispatch(clearcomplete());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImag}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
