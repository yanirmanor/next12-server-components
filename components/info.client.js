import { useState, useEffect } from "react";
export default function Info() {
  const [value, setValue] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");

  const getApiData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(`Rendered from client at ${new Date().toTimeString()} with Edge
	  Middleware.`);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>{message}</div>
      <div>
        This is some info from client - value - {value ? "On" : "Off"}
        <button
          className="ml-5 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setValue(!value)}
        >
          Click me
        </button>
      </div>

      <div>
        <button
          className="mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => getApiData()}
        >
          Get data
        </button>
        <button
          className="mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setUser({})}
        >
          Clear data
        </button>
        {JSON.stringify(user)}
      </div>
    </>
  );
}
