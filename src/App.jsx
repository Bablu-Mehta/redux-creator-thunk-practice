import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";

import { fetchUser } from "./store/store";

function App() {
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <h1>Hey there</h1>
      <h2>{username}</h2>
    </>
  );
}

export default App;
