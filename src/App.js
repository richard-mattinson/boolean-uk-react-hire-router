import { useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"
import "./styles.css"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  console.log("Hired People", hiredPeople);

function hireAPerson(person) {
  setHiredPeople([...hiredPeople, person])
}

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/view/:id" 
        element={<PersonProfile hireAPerson={hireAPerson} />} />
        <Route path="/" 
        element={<Dashboard hiredPeople={hiredPeople} />} />
      </Routes>
    </>
  );
}
