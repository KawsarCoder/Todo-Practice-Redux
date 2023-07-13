import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import TodoList from "./Components/TodoList/TodoList";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        {/* <!-- navbar --> */}
        <Navbar />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          {/* <!-- header --> */}
          <Header />

          <hr className="mt-4" />

          {/* <!-- todo list --> */}
          <TodoList />

          <hr className="mt-4" />

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
