export default function AnimalList() {
  const animals = ['lion', 'cow', 'snake', 'lizard']
  // const animals = null

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  )
}

function List(props) {
  // return 'loading . . .' if props.animals doesn't exist
  if (!props.animals) {
    return "loading . . .";
  }

  // return 'there are no animals' if props.animals is an empty array
  if (props.animals.length === 0) {
    return "there are no animals";
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}
