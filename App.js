import React, { useEffect, useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('/players.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const filtered = players.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>DLS25 Player Stats</h1>
      <input
        type="text"
        placeholder="Tìm cầu thủ..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Vị trí</th>
            <th>Rating</th>
            <th>Tốc độ</th>
            <th>Sút</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.position}</td>
              <td>{p.rating}</td>
              <td>{p.pace}</td>
              <td>{p.shooting}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
