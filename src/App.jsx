import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [childInfo, setChildInfo] = useState([]);

  const baseUrl = import.meta.VITE_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/childinfo`)
      .then((res) => {
        setChildInfo(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseUrl]);

  return (
    <>
      <h1>Child Info</h1>
      {childInfo.map((child, i) => {
        return (
          <div key={child.id || i}>
            <h2>{child.name}</h2>
            <p>{child.year}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
