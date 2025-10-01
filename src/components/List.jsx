const fruitlist = ['apple', 'banana', 'cherry'];

function MyList() {
  return (
    <ul>
      {fruitlist.map(fruit => 
        <li>{fruit}</li>
      )}
    </ul>
  );
}
export default MyList;