import {useState} from "react";

export default function Person() {
  const [person, setPerson] = useState({name: 'John', age: 21})

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person)
    // mutating the current state object -- BAD
    // person.age = person.age + 1
    // setPerson(person)

    // creating a new state object -- GOOD
    setPerson({...person, age: person.age + 1})
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  }

  console.log("during render: ", person);
  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
  )
}
