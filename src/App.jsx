import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [childInfo, setChildInfo] = useState([]);

  // const baseUrl = import.meta.VITE_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    axios
      // .get(`${baseUrl}/api/childinfo`)
      .get(`/api/childinfo`)
      .then((res) => {
        setChildInfo(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const p = { padding: 10 };

  return (
    <>
      <h1>Child Info</h1>
      <table border="1">
        <thead>
          <tr>
            <th style={p}>Name</th>
            <th style={p}>Year</th>
          </tr>
        </thead>
        <tbody>
          {childInfo.map((child) => (
            <tr key={child.id}>
              <td style={p}>{child.name}</td>
              <td style={p}>{child.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
