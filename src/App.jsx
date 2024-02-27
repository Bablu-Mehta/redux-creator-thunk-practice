import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const username = useSelector((state) => state.username);
  return (
    <>
      <h1>Hey there</h1>
      <h2>{username}</h2>
    </>
  );
}

export default App;
