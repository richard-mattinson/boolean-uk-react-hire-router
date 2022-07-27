import { useState } from "react"
import { useNavigate } from "react-router"

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const hirePerson = props.hirePerson
  const person = props.person
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    hirePerson(person)
    navigate("/") 
    // useNavigate hook moves the user back to the Dash when the HireForm function is run through submitting the below form
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
