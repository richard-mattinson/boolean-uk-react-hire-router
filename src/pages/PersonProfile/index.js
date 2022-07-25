import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import HireForm from "./components/HireForm"

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const location = useLocation()
  const hiredPeople = props.hiredPeople

  console.log("Person", person, "Location", location);

  useEffect(() => {
    if (location.state) {
      const { person } = location.state
      setPerson(person)
    }
}, [location])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} />
    </article>
  )
}

export default PersonProfile
