import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var names = ["Abd", "Anamul", "Mahafuz", "Bappi", "Shuvo"]
  const products =[{name:'Photoshpop', price: '$90.99'},
{name:'Illustrator', price:'$60.99'},
{name:'PDF Reader', price:"$6.99"},
{name:'premier', price:"$40300"}]
const persoNames = names.map(name => name);
console.log(names);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            names.map(name => <li>{name} </li>)
          }
          
          {
            products.map(pd => <li>{pd.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}
    <Person name={names[0]} job='Web Development'></Person>
    <Person name={names[1]} job="rajmistri"></Person>
    <Person name={names[2]} job='Square Company'></Person>
    
      </header>
    </div>
  );
}

function  Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease =() =>setCount(count +1);

  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={()=>setCount(count -1)}>decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div> 
  )
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props) {
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
        <h3>{name} </h3>
        <h5>{price}</h5>
        <button>Buy NOw</button>
    </div>
  )
}
function Person(props) {
  return (
    <div style={{border:'2px solid red', margin: '10px'}}>
      <h1>Name: {props.name}</h1>
      <h3>Job: {props.job} </h3>
    </div>
    
  )
}
export default App;
