function List(){
    const fruits = ["apple","orange", "banana", "coconut", "pineapple"];

    const listItems = fruits.map(fruits => <li>{fruits}</li>);

    return(
         <ol>{listItems}</ol>
    );
}

export default List