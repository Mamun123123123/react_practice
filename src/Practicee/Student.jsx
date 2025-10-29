import React, { useState } from "react";

function Student() {
  const [page, setPage] = useState("home");

  const students = [
    { id: 1, name: "Abdullah", university: "BUET" },
    { id: 2, name: "Rafi", university: "DU" },
    { id: 3, name: "Nayeem", university: "RUET" },
    { id: 4, name: "Sadia", university: "KUET" },
    { id: 5, name: "Mehedi", university: "CUET" },
    { id: 6, name: "Jannat", university: "RU" },
    { id: 7, name: "Rashid", university: "AIUB" },
    { id: 8, name: "Tasnim", university: "NSU" },
    { id: 9, name: "Tanvir", university: "BRAC" },
    { id: 10, name: "Fahim", university: "UIU" },
  ];

  return (
    <div>
      {page === "home" ? (
        <>
          <h1>Welcome to Student App</h1>
          <button onClick={() => setPage("students")}>
            Show Student List
          </button>
        </>
      ) : (
        <>
          <h2>Student Details</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>University</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.university}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <button onClick={() => setPage("home")}>Back to Home</button>
        </>
      )}
    </div>
  );
}

export default Student;
