import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import HireForm from "./components/HireForm"

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const location = useLocation()
  const hirePerson = props.hirePerson

  console.log("Person", person, "Location", location);

  useEffect(() => {
    if (location.state) {
      const { person } = location.state
      setPerson(person)
    }
}, [location])
// [location] in the line above means useEffect only renders when location (the page within this app) changes.

  if (!person) return <p>Loading...</p>
  
  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson={hirePerson} />
    </article>
  )
}

export default PersonProfile
