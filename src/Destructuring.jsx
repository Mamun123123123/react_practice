
const ob = {
  name: "mamun",
  age: 77,
  city: {
    old: "Dhaka",
    newCity: "China"
  }
}

function ShowInfo({ name, age, city: { old, newCity} }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <p>Old City: {old}</p>
      <p>New City: {newCity}</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <ShowInfo {...ob} />
    </div>
  )
}


